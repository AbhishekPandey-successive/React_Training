import React, { useState } from 'react';

const ToDoList1 = () => {
 
  const [todos, setTodos] = useState([]);


  const addTodo = () => {
    
    const newTodo = {
      id: Date.now(),
      text: "Task", 
      completed: false, 
    };

    
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  

  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  
  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  
  return (
    <div>
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            {todo.text}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList1;
