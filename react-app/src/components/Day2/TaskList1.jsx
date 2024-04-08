
// create a component that displays a list of tasks.
// Each task has a "Complete" button.
// Implement a feature where clicking the "Complete" button marks the task as completed.
// Use the useCallback hook to create dynamic callback functions for each task.
// Ensure that clicking the "Complete" button for one task doesn't trigger unnecessary re-renders for other tasks.


import React, { useState, useCallback } from 'react';

const TaskList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Buy groceries', completed: false },
    { id: 2, text: 'Walk the dog', completed: false },
    { id: 3, text: 'Go to College', completed: false },
    { id: 4, text: 'Play the Cricket', completed: false },
    
  ]);

  
  const handleComplete = useCallback(
    (taskId) => {
      setTasks((prevTasks) =>
        prevTasks.map((task) => task.id === taskId ? { ...task, completed: !task.completed } : task
        )
      );
    },
    []
  );

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.text}
            {console.log("1111111111")}
            <button onClick={() => handleComplete(task.id)}>
              {task.completed ? 'Undo' : 'Complete'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
