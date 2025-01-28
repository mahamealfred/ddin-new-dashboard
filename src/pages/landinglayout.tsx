import  { Fragment, useEffect, useState } from 'react'
import Landingswitcher from '../components/common/switcher/landingswitcher'
import Backtotop from '../components/common/backtotop/backtotop'
import { Provider } from 'react-redux'
import { Outlet, useLocation } from 'react-router-dom'
import store from '../redux/store'
import "preline/preline";
import { IStaticMethods } from "preline/preline";
import { Initialload } from '../components/common/contextapi'

declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}
 

const Landinglayout = () => {

  const [lateLoad, setlateLoad] = useState(false);
  useEffect(() => {
    setlateLoad(true);
  });
  
  const location = useLocation();
  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);

  const [pageloading, setpageloading] = useState(false)
  return (
    <Fragment>
        <Initialload.Provider value={{ pageloading, setpageloading }}>
          <div style={{display: `${lateLoad ? 'block' : 'none'}`}}>
              <Provider store={store}>
                <Landingswitcher />
                <Outlet/>
                </Provider>
                <Backtotop/>  
            </div>
        </Initialload.Provider>
    </Fragment>
  )
}

export default Landinglayout