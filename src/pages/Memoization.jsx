import React, { useState, useCallback, useMemo } from 'react';
import withHomeButton from '../hoc/withHomeButton';
import withAuth from '../hoc/withAuth';

// const expensiveFunction = (count) => {
//   for (let i = 0; i < 1000000000; i++) {}
//   return count * 2;
// };

const Memoization = () => {
  const [input, setInput] = useState('');
  const [count, setCount] = useState(0);

  // const newCount = useMemo(() => expensiveFunction(count), [count]);

  const incrementCount = () => setCount(count + 1);

  return (
    <div>
      <div>Memoization</div>
      <div>
        <h2>This is a parent component.</h2>
        <input
          type='text'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={incrementCount}>Increment counter</button>
        <h3>Input text: {input}</h3>
        <h3>Count: {count}</h3>
        {/* <h3>Count x 2: {newCount}</h3> */}
        <hr />
        <ChildComponent count={count} />
      </div>
    </div>
  );
};

function ChildComponent(props) {
  const { count } = props;
  console.log('child component re-renders');
  return (
    <div>
      <h2>This is a child component.</h2>
      <h4>Count: {count}</h4>

      {/* <button onClick={incrementCount}>Increment</button> */}
    </div>
  );
}

// const MemoChildComponent = React.memo(ChildComponent);

export default withHomeButton(Memoization);

// const MemoComponent = React.memo(Component, (oldProps, newProps) => {
//   oldProps.items.every((oldItem, index) => {
//     const point = newProps.items[index];
//     return oldItem.x === point.x && oldItem.y === point.y;
//   });
// });

// incrementCount={incrementCount}
