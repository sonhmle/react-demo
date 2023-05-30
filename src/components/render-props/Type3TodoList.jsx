import React from 'react';
import '../../styles/render-props-todo-list.css';
import Input from 'rsuite/Input';
import Tag from 'rsuite/Tag';
import TagGroup from 'rsuite/TagGroup';
import Toggle from 'rsuite/Toggle';
import RenderPropTodo from './RenderPropTodo';

const Type3TodoList = () => {
  return (
    <RenderPropTodo
      renderItems={(tasks, toggleStatus, removeTask) => (
        <TagGroup>
          {tasks.map((task, index) => (
            <Tag
              key={task.name}
              closable
              color={task.isCompleted ? 'green' : 'red'}
              onClose={() => removeTask(index)}
            >
              <Toggle size='sm' onClick={() => toggleStatus(index)} />
              {task.name}
            </Tag>
          ))}
        </TagGroup>
      )}
      renderAddInput={(input, setInput) => (
        <Input
          size='xs'
          value={input}
          onChange={setInput}
          placeholder='Text ...'
        />
      )}
    />
  );
};

export default Type3TodoList;
