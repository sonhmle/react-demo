import React, { useEffect, useMemo, useCallback, useState } from 'react';
import '../styles/render-props-todo-list.css';
import Button from '../components/Button';
import Input from 'rsuite/Input';
import Tag from 'rsuite/Tag';
import RadioGroup from 'rsuite/RadioGroup';
import Radio from 'rsuite/Radio';

const TaskItem = (props) => {
  const {
    task,
    handleChangeStatus,
    // color
  } = props;
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count + 1);
  }, [
    task,
    handleChangeStatus,
    // color
  ]);

  return (
    <div className='todo-item'>
      <span
        onClick={() => handleChangeStatus(task)}
        style={{
          textDecoration: task.isCompleted ? 'line-through' : 'none',
          //   color,
        }}
      >
        {task.name}
      </span>
      <Tag color='red'>{count}</Tag>
    </div>
  );
};

const TaskFilter = ({ setFilterMode }) => {
  return (
    <RadioGroup
      name='radioList'
      inline
      appearance='picker'
      defaultValue='normal'
      onChange={(value) => setFilterMode(value)}
      style={{
        padding: 10,
        display: 'flex',
        alignItems: 'center',
        fontSize: '0.8em',
        marginBottom: 20,
      }}
    >
      <Radio value='all'>All</Radio>
      <Radio value='todo'>ToDo</Radio>
      <Radio value='completed'>Completed</Radio>
    </RadioGroup>
  );
};

const ColorPicker = ({ color, setColor }) => (
  <input
    type='color'
    value={color}
    onChange={(e) => setColor(e.target.value)}
  />
);

const AddTask = (props) => {
  const { setTasks } = props;
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    input &&
      setTasks((currentTasks) => [
        ...currentTasks,
        { id: Date.now(), name: input, isCompleted: false },
      ]);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 10 }}>
      <Input
        value={input}
        placeholder='Enter todo name...'
        onChange={(value) => setInput(value)}
      />
      <Button type='submit'>Add</Button>
    </form>
  );
};

let filterCount = 0;

const MemoizedTaskItem = React.memo(TaskItem);

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [filterMode, setFilterMode] = useState('all');
  const [color, setColor] = useState('#000');

  const toggleStatus = useCallback((task) => {
    setTasks((currentTasks) =>
      currentTasks.map((t) =>
        t.id === task.id ? { ...t, isCompleted: !t.isCompleted } : t
      )
    );
  }, []);

  const getFilteredItems = (tasks, filterMode) => {
    filterCount++;
    switch (filterMode) {
      case 'all':
        return tasks;
      case 'completed':
        return tasks.filter((task) => task.isCompleted);
      case 'todo':
        return tasks.filter((task) => !task.isCompleted);
      default:
        return tasks;
    }
  };

  const filteredItems = useMemo(
    () => getFilteredItems(tasks, filterMode),
    [tasks, filterMode]
  );

  return (
    <div className='todo-list'>
      <div style={{ marginBottom: 10, fontSize: 16 }}>
        getFilteredItems() is called: {filterCount / 2} times
      </div>
      <TaskFilter setFilterMode={setFilterMode} />

      {filteredItems.map((task) => (
        <MemoizedTaskItem
          key={task.id}
          task={task}
          handleChangeStatus={toggleStatus}
          color={color}
        />
      ))}

      <AddTask setTasks={setTasks} />

      <ColorPicker color={color} setColor={setColor} />
    </div>
  );
};

export default TodoList;
