import React, { createContext } from 'react';

const MyContext = createContext();

const MyComponent = () => {
  return (
    <MyContext.Provider
      value={{
        name: 'As Long As You Like',
        theme: 'light',
        language: 'en-us',
      }}
    >
      <MyChildComponent />
    </MyContext.Provider>
  );
};

export { MyContext, MyComponent };

import { useContext } from 'react';
import { MyContext } from './MyComponent';

const MyChildComponent = () => {
  const { name, theme, language } = useContext(MyContext);

  return (
    <div>
      <p>{name}</p>
    </div>
  );
};
