import React, { useState } from 'react';
import '../../styles/render-props-todo-list.css';

const RenderPropTodo = (props) => {
  const { renderItems, renderAddInput } = props;
  const [tasks, setTasks] = useState([
    {
      name: 'Like',
      isCompleted: false,
    },
    {
      name: 'Comment',
      isCompleted: false,
    },
    {
      name: 'Share',
      isCompleted: false,
    },
  ]);

  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    input && setTasks([...tasks, { name: input }]);
    setInput('');
  };

  const toggleStatus = (index) => {
    const newTasks = [...tasks];
    newTasks[index].isCompleted = !newTasks[index].isCompleted;
    setTasks(newTasks);
  };

  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div className='todo-list'>
      {renderItems(tasks, toggleStatus, removeTask)}

      <form onSubmit={handleSubmit}>{renderAddInput(input, setInput)}</form>
    </div>
  );
};

export default RenderPropTodo;
