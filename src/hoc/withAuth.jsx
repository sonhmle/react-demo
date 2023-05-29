import React from "react";
import Loader from "../components/Loader";
// import { useLocalStorage } from "../hooks/useLocalStorage";

const withAuth = (Component) => {
  const Auth = (props) => {
    const isAuth = localStorage.getItem("isAuth");

    // If user is not logged in, navigate home
    if (!isAuth) {
      window.location.href = "/";
      return <Loader />;
    }

    // If user is logged in, return original component
    return <Component {...props} />;
  };

  return Auth;
};

export default withAuth;

// const [isAuth] = useLocalStorage("isAuth", "");
