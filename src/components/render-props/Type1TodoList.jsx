import React from 'react';
import '../../styles/render-props-todo-list.css';
import Button from '../Button';
import Input from 'rsuite/Input';
import RenderPropTodo from './RenderPropTodo';
import withHomeButton from '../../hoc/withHomeButton';

const Type1TodoList = () => {
  return (
    <RenderPropTodo
      renderItems={(tasks, toggleStatus, removeTask) =>
        tasks.map((task, index) => (
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
        ))
      }
      renderAddInput={(input, setInput) => (
        <>
          <Input
            value={input}
            placeholder='Enter todo name...'
            onChange={(value) => setInput(value)}
          />
          <Button type='submit'>Add</Button>
        </>
      )}
    />
  );
};

export default withHomeButton(Type1TodoList);
