import React, { useState } from 'react';
import '../styles/render-props-todo-list.css';
import RadioGroup from 'rsuite/RadioGroup';
import Radio from 'rsuite/Radio';
import Type1TodoList from '../components/render-props/Type1TodoList';
import Type2TodoList from '../components/render-props/Type2TodoList';
import Type3TodoList from '../components/render-props/Type3TodoList';

const RenderPropsToDoList = () => {
  const [displayMode, setDisplayMode] = useState('1');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 50 }}>
      <RadioGroup
        name='radioList'
        inline
        appearance='picker'
        defaultValue='normal'
        onChange={(value) => setDisplayMode(value)}
        style={{
          padding: 10,
          display: 'flex',
          alignItems: 'center',
          fontSize: '0.8em',
        }}
      >
        <span>Display mode: </span>
        <Radio value='1'>Type 1</Radio>
        <Radio value='2'>Type 2</Radio>
        <Radio value='3'>type 3</Radio>
      </RadioGroup>

      {displayMode === '1' ? (
        <Type1TodoList />
      ) : displayMode === '2' ? (
        <Type2TodoList />
      ) : (
        <Type3TodoList />
      )}
    </div>
  );
};

export default RenderPropsToDoList;
