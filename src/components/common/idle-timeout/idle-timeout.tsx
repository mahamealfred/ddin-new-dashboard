import { useEffect, useRef, useState, useCallback, FC } from 'react';
import { useNavigate } from 'react-router-dom';

const IDLE_MS       = 4.5 * 60 * 1000; // 4 min 30 s of inactivity → show warning
const WARNING_SECS  = 30;               // 30 s countdown before auto-logout

const ACTIVITY_EVENTS = ['mousemove', 'mousedown', 'keydown', 'touchstart', 'scroll'] as const;

const CIRCUMFERENCE = 2 * Math.PI * 26; // r=26

const IdleTimeout: FC = () => {
  const navigate          = useNavigate();
  const [visible, setVisible]     = useState(false);
  const [countdown, setCountdown] = useState(WARNING_SECS);
  const idleTimer    = useRef<ReturnType<typeof setTimeout> | null>(null);
  const warnInterval = useRef<ReturnType<typeof setInterval> | null>(null);
  const countRef     = useRef(WARNING_SECS);

  const doLogout = useCallback(() => {
    clearTimeout(idleTimer.current!);
    clearInterval(warnInterval.current!);
    localStorage.removeItem('token');
    localStorage.removeItem('userData');
    localStorage.removeItem('refreshToken');
    setVisible(false);
    navigate(`${import.meta.env.BASE_URL}firebase/login`);
  }, [navigate]);

  const startWarning = useCallback(() => {
    countRef.current = WARNING_SECS;
    setCountdown(WARNING_SECS);
    setVisible(true);

    warnInterval.current = setInterval(() => {
      countRef.current -= 1;
      setCountdown(countRef.current);
      if (countRef.current <= 0) {
        clearInterval(warnInterval.current!);
        doLogout();
      }
    }, 1000);
  }, [doLogout]);

  const resetIdle = useCallback(() => {
    // If warning is showing, dismiss it
    if (visible) {
      clearInterval(warnInterval.current!);
      setVisible(false);
      setCountdown(WARNING_SECS);
    }
    clearTimeout(idleTimer.current!);
    idleTimer.current = setTimeout(startWarning, IDLE_MS);
  }, [visible, startWarning]);

  // Bind / unbind activity listeners
  useEffect(() => {
    ACTIVITY_EVENTS.forEach(e => window.addEventListener(e, resetIdle, { passive: true }));
    idleTimer.current = setTimeout(startWarning, IDLE_MS);
    return () => {
      ACTIVITY_EVENTS.forEach(e => window.removeEventListener(e, resetIdle));
      clearTimeout(idleTimer.current!);
      clearInterval(warnInterval.current!);
    };
  }, [resetIdle, startWarning]);

  if (!visible) return null;

  const progress = countdown / WARNING_SECS;
  const dashOffset = CIRCUMFERENCE * (1 - progress);
  const isUrgent = countdown <= 10;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm"
        onClick={resetIdle}
      />

      {/* Modal */}
      <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-[fadeInScale_0.2s_ease-out]">

        {/* Top accent bar */}
        <div className={`h-1.5 w-full ${isUrgent ? 'bg-red-500' : 'bg-amber-400'} transition-colors duration-500`} />

        <div className="px-8 py-8 flex flex-col items-center text-center gap-5">

          {/* Countdown ring */}
          <div className="relative w-20 h-20">
            <svg className="w-20 h-20 -rotate-90" viewBox="0 0 60 60">
              {/* Track */}
              <circle cx="30" cy="30" r="26" fill="none" strokeWidth="4" className="stroke-gray-100 dark:stroke-gray-700" />
              {/* Progress */}
              <circle
                cx="30" cy="30" r="26" fill="none" strokeWidth="4"
                strokeLinecap="round"
                className={`transition-all duration-1000 ${isUrgent ? 'stroke-red-500' : 'stroke-amber-400'}`}
                strokeDasharray={CIRCUMFERENCE}
                strokeDashoffset={dashOffset}
              />
            </svg>
            <span className={`absolute inset-0 flex items-center justify-center text-2xl font-extrabold tabular-nums ${isUrgent ? 'text-red-500' : 'text-amber-500'}`}>
              {countdown}
            </span>
          </div>

          {/* Icon + heading */}
          <div>
            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-3 rounded-2xl bg-amber-50 dark:bg-amber-900/30">
              <i className="bx bx-time-five text-3xl text-amber-500" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              Still there?
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1.5 leading-relaxed">
              You've been inactive for a while. For your security, you'll be
              <span className={`font-semibold ${isUrgent ? ' text-red-500' : ' text-amber-600 dark:text-amber-400'}`}> automatically logged out </span>
              in <span className={`font-bold tabular-nums ${isUrgent ? 'text-red-500' : 'text-amber-600 dark:text-amber-400'}`}>{countdown} second{countdown !== 1 ? 's' : ''}</span>.
            </p>
          </div>

          {/* Actions */}
          <div className="flex gap-3 w-full mt-1">
            <button
              onClick={doLogout}
              className="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 text-sm font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              Log Out Now
            </button>
            <button
              onClick={resetIdle}
              className="flex-1 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold shadow-sm transition-colors"
            >
              Stay Logged In
            </button>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.93); }
          to   { opacity: 1; transform: scale(1);    }
        }
      `}</style>
    </div>
  );
};

export default IdleTimeout;
