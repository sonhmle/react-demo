import React from 'react';
import '../../styles/render-props-todo-list.css';
import Button from 'rsuite/Button';
import Input from 'rsuite/Input';
import PlusRoundIcon from '@rsuite/icons/PlusRound';
import CheckRoundIcon from '@rsuite/icons/CheckRound';
import TrashIcon from '@rsuite/icons/Trash';
import RenderPropTodo from './RenderPropTodo';
import List from 'rsuite/List';
import IconButton from '../IconButton';
import withHomeButton from '../../hoc/withHomeButton';

const Type2TodoList = () => {
  return (
    <RenderPropTodo
      renderItems={(tasks, toggleStatus, removeTask) => (
        <List bordered>
          {tasks.map((task, index) => (
            <List.Item
              key={index}
              index={index}
              style={{ backgroundColor: task.isCompleted ? 'grey' : 'white' }}
            >
              {task.name}
              <div>
                <IconButton
                  icon={<CheckRoundIcon />}
                  onClick={() => toggleStatus(index)}
                />
                <IconButton
                  icon={<TrashIcon />}
                  onClick={() => removeTask(index)}
                />
              </div>
            </List.Item>
          ))}
        </List>
      )}
      renderAddInput={(input, setInput) => (
        <>
          <Button type='submit'>
            <PlusRoundIcon />
          </Button>
          <Input
            value={input}
            placeholder='Enter todo name...'
            onChange={(value) => setInput(value)}
          />
        </>
      )}
    />
  );
};

export default withHomeButton(Type2TodoList);
