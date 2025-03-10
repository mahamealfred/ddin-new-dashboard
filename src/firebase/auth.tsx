
import { Outlet, useLocation } from "react-router-dom";
import store from "../redux/store";
import { Provider } from "react-redux";
import { Fragment, useEffect } from "react";
import {AuthProvider } from "../components/common/contextapi";
import "preline/preline";
import { IStaticMethods } from "preline/preline";

declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}
const Auth = () => {
  
  const location = useLocation();

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);

  // const [pageloading, setpageloading] = useState(false)
  return (
    <Fragment>
      <AuthProvider>
            <Provider store={store}>
              <Outlet/>      
            </Provider>
      </AuthProvider>
    </Fragment>
  );
};

export default Auth;
