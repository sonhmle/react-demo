import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'rsuite/Button';
// import { useLocalStorage } from "../hooks/useLocalStorage";

const Home = () => {
  const [isAuth, setIsAuth] = React.useState(localStorage.getItem('isAuth'));
  const enterLogin = () => {
    localStorage.setItem('isAuth', 'true');
    setIsAuth(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('isAuth');
    setIsAuth(false);
  };

  return (
    <div style={{ padding: 10 }}>
      <div>Home</div>
      <div>Currently: {isAuth ? 'Login' : 'Logout'}</div>
      <Button onClick={enterLogin}>Login</Button>
      <Button onClick={handleLogout}>Logout</Button>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Link to='/render-props'>Render Props</Link>
        <Link to='/render-props-todo-list'>Render Props ToDo List</Link>
        <Link to='/react-context'>React Context</Link>
        <Link to='/hooks-todo-list'>Hooks ToDo List</Link>
        <Link to='/memoization'>Memoization</Link>
        <Link to='/memoized-todo'>Memoized ToDo List</Link>
      </div>
    </div>
  );
};

export default Home;

// const [isAuth, setIsAuth] = useLocalStorage("isAuth", "");
