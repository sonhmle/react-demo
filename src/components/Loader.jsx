import React from "react";
import RSLoader from "rsuite/Loader";

const Loader = (props) => {
  const { text } = props;

  return (
      <RSLoader
        size="lg"
        backdrop
        content={<h5>{text || "Loading ..."}</h5>}
        vertical
      />
  );
};

export default Loader;
