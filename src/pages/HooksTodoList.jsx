import React from 'react';
import '../styles/render-props-todo-list.css';
import Button from '../components/Button';
import Input from 'rsuite/Input';
import useTodoList from '../hooks/useTodoList';

const HooksTodoList = () => {
  const { tasks, toggleStatus, removeTask, input, setInput, handleSubmit } =
    useTodoList();
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

export default HooksTodoList;
