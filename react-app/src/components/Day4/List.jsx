import React, { useState } from 'react';


function List() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const addTask = () => {
    if (inputValue) {
      setTasks([...tasks, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div className="App">
      <h2>Todo List</h2>
      <input
        type="text"
        placeholder="Enter a new task"
        value={inputValue}
        onChange={handleInputChange}
      />
      
      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default List;
