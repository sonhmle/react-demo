import React, { useState } from "react";
import withAuth from "../hoc/withAuth";
import Button from "rsuite/Button";

const Dog = ({ position }) => {
  return (
    <div style={{ position: "absolute", left: position.x, top: position.y }}>
      This is a dog at position ({position.x}, {position.y})
    </div>
  );
};

const Bird = ({ position }) => {
  return (
    <img
      src={"https://cdn-icons-png.flaticon.com/512/2219/2219694.png"}
      alt="Bird"
      style={{ position: "absolute", left: position.x, top: position.y }}
      width={100}
      height={100}
    />
  );
};

const MousePosition = (props) => {
  const [state, setState] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setState({
      x: event.clientX,
      y: event.clientY,
    });
  };

  return (
    <div>
      <div style={{ height: "100vh" }} onMouseMove={handleMouseMove}>
        <p>
          The current mouse position is ({state.x}, {state.y})
        </p>
        {/* <Dog position={state} /> */}

        {/* {props.renderItem(state)} */}
      </div>
    </div>
  );
};

const RenderProps = () => {
  return (
    <div>
      <div>RenderProps</div>
      <MousePosition />
    </div>
  );
};

// const RenderProps = () => {
//   const [imgMode, setImgMode] = useState(false);

//   const handleToggle = () => {
//     setImgMode(!imgMode);
//   };

//   const renderItem = (pos) => {
//     if (imgMode) {
//       return <Bird position={pos} />;
//     }

//     return <Dog position={pos} />;
//   };

//   return (
//     <div>
//       <div>RenderProps</div>
//       <Button onClick={handleToggle}>Switch mode</Button>
//       <MousePosition renderItem={renderItem} />
//     </div>
//   );
// };

export default RenderProps;
