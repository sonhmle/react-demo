import React, { useEffect, useMemo, useCallback, useState } from 'react';
import '../../styles/render-props-todo-list.css';
import Button from '../../components/Button';
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
      defaultValue='all'
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

let filterCountWithoutMemo = 0;
let filterCountWithMemo = 0;

const TodoList1 = () => {
  const [tasks, setTasks] = useState([]);
  const [filterMode, setFilterMode] = useState('all');
  const [color, setColor] = useState('#000');

  const toggleStatus = (task) => {
    setTasks((currentTasks) =>
      currentTasks.map((t) =>
        t.id === task.id ? { ...t, isCompleted: !t.isCompleted } : t
      )
    );
  };

  const getFilteredItems = (tasks, filterMode) => {
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

  const filteredItems = getFilteredItems(tasks, filterMode);

  return (
    <div className='todo-list'>
      <TaskFilter setFilterMode={setFilterMode} />

      {filteredItems.map((task) => (
        <TaskItem
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

const MemoizedTaskItem = React.memo(TaskItem);

const TodoList2 = () => {
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

  const filteredItems = getFilteredItems(tasks, filterMode);

  return (
    <div className='todo-list'>
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

const TodoList3 = () => {
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
    filterCountWithoutMemo++;
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

  const filteredItems = getFilteredItems(tasks, filterMode);

  return (
    <div className='todo-list'>
      <div style={{ marginBottom: 10, fontSize: 16, color: 'blue' }}>
        getFilteredItems() is called: {filterCountWithoutMemo / 2} times
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

const TodoList4 = () => {
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
    filterCountWithMemo++;
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
      <div style={{ marginBottom: 10, fontSize: 16, color: 'blue' }}>
        getFilteredItems() is called: {filterCountWithMemo / 2} times
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

const ToDoListDisplay = () => {
  const [displayMode, setDisplayMode] = useState('1');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 15 }}>
      <RadioGroup
        name='radioList'
        inline
        appearance='picker'
        defaultValue='1'
        onChange={(value) => {
          setDisplayMode(value);
          filterCountWithoutMemo = 0;
          filterCountWithMemo = 0;
        }}
        style={{
          padding: 10,
          display: 'flex',
          alignItems: 'center',
          fontSize: '0.8em',
        }}
      >
        <span>Use todo: </span>
        <Radio value='1'>Without memoization</Radio>
        <Radio value='2'>useCallback and React memo</Radio>
        <Radio value='3'>Another without memoization</Radio>
        <Radio value='4'>useMemo</Radio>
      </RadioGroup>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {displayMode === '1' ? (
          <TodoList1 />
        ) : displayMode === '2' ? (
          <TodoList2 />
        ) : displayMode === '3' ? (
          <TodoList3 />
        ) : (
          <TodoList4 />
        )}
      </div>
    </div>
  );
};

export default ToDoListDisplay;
