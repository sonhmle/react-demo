import React, { useState } from 'react';
import '../../styles/render-props-todo-list.css';
import Button from 'rsuite/Button';
import Input from 'rsuite/Input';

const BasicTodoList = () => {
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
      {tasks.map((task, index) => (
        <div className='todo-item' key={index}>
          <span
            onClick={() => toggleStatus(index)}
            style={{
              textDecoration: task.isCompleted ? 'line-through' : 'none',
            }}
          >
            {task.name}
          </span>
          <Button onClick={() => removeTask(index)} color='red'>
            Del
          </Button>
        </div>
      ))}

      <form onSubmit={handleSubmit}>
        <Input
          value={input}
          placeholder='Enter todo name...'
          onChange={(value) => setInput(value)}
        />
        <Button type='submit'>Add</Button>
      </form>
    </div>
  );
};

export default BasicTodoList;
