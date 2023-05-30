import React, { createContext, useContext, useState } from 'react';
import withHomeButton from '../hoc/withHomeButton';

const ThemeContext = createContext(null);

const ReactContext = () => {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={theme}>
      <Panel>
        <div>ReactContext</div>

        <Form />
        <label>
          <input
            type='checkbox'
            checked={theme === 'dark'}
            onChange={(e) => {
              setTheme(e.target.checked ? 'dark' : 'light');
            }}
          />
          Use dark mode
        </label>
      </Panel>
    </ThemeContext.Provider>
  );
};

function Form() {
  return (
    <Panel>
      <Button>Sign up</Button>
      <Button>Log in</Button>
    </Panel>
  );
}

function Panel({ children }) {
  const theme = useContext(ThemeContext);
  const className = 'panel-' + theme;
  return <section className={className}>{children}</section>;
}

function Button({ children }) {
  const theme = useContext(ThemeContext);
  const className = 'button-' + theme;
  return <button className={className}>{children}</button>;
}

export default ReactContext;
