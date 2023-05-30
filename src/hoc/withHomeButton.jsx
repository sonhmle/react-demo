import React from 'react';
import Button from '../components/Button';
import Divider from 'rsuite/Divider';
import { Link } from 'react-router-dom';

const withHomeButton = (WrappedComponent) => {
  const WithHomeButton = (props) => {
    return (
      <div>
        <Link to='/'>
          <Button color='green'>Home</Button>
        </Link>

        <Divider />

        <WrappedComponent {...props} />
      </div>
    );
  };
  return WithHomeButton;
};

export default withHomeButton;
