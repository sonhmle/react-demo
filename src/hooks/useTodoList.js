import React, { useState } from 'react';

const useTodoList = () => {
  const [tasks, setTasks] = useState([]);

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

  return { tasks, input, setInput, handleSubmit, toggleStatus, removeTask };
};

export default useTodoList;
