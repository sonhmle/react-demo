import React from 'react';
import RSButton from 'rsuite/Button';

const Button = (props) => {
  return (
    <RSButton appearance='primary' {...props}>
      {props.children}
    </RSButton>
  );
};

export default Button;
