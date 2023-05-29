import React from "react";
import Button from "rsuite/Button";
// import { useSample } from "../contexts/sample";

const withHomeButton = (Component) => {
  const Page = (props) => {
    const goHome = () => {
      props.history.push("/");
    };

    return (
      <div>
        <Button onClick={goHome}>Home</Button>
        <Component {...props} />
      </div>
    );
  };

  // Page.displayName = `withHomeButton(${
  //   Component.displayName || Component.name
  // })`;

  return Page;
};

export default withHomeButton;

// const { state } = useSample();
// style={{ color: state.theme === "light" ? "red" : "blue" }}
