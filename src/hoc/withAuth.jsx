import React from 'react';
import Loader from '../components/Loader';
// import { useLocalStorage } from "../hooks/useLocalStorage";

const withAuth = (WrappedComponent) => {
  const Auth = (props) => {
    const isAuth = localStorage.getItem('isAuth');

    // If user is not logged in
    if (!isAuth) {
      return <div>You need to login to see this</div>;
    }

    // If user is logged in, return original component
    return <WrappedComponent {...props} />;
  };

  return Auth;
};

export default withAuth;

// const [isAuth] = useLocalStorage("isAuth", "");
