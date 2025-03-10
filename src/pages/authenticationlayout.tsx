import  { Fragment, useEffect } from 'react'
import Switcher from '../components/common/switcher/switcher';
import {  Provider } from 'react-redux';
import store from '../redux/store';
import { Outlet, useLocation } from 'react-router-dom';
import "preline/preline";
import { IStaticMethods } from "preline/preline";
import { AuthProvider } from '../components/common/contextapi';

declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}
const Authenticationlayout = () => {
  const location = useLocation();
  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);
  
  return (
    <Fragment>
      <AuthProvider >
          <Provider store={store}>
              <Switcher/>
              <Outlet/>
          </Provider>
      </AuthProvider>
    </Fragment>
  )
}

export default Authenticationlayout