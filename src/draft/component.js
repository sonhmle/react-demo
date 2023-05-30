// functional component
import React from 'react';

const MyComponent = (props) => {
  return <h1>Hello {props.name}!</h1>;
}

export default MyComponent;

// class component
import React from 'react';

class MyComponent extends React.Component {
  render() {
    return <h1>Hello {this.props.name}!</h1>;
  }
}

export default MyComponent;