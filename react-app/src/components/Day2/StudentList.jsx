
// Create a functional component named StudentList that displays a list of student names..
// Define an array of student names as a constant within the component.
// Use the useMemo hook to memoize the list of student names.
// Render the list of student names on the screen.
// Include a button that, when clicked, appends a new student name to the list.
import React, { useState, useMemo } from 'react';

const StudentList = () => {
  
  const initialStudentNames = useMemo(() => [], []);

  
  const [studentNames, setStudentNames] = useState(initialStudentNames);

  
  const addStudentName = () => {
    const newStudentName = prompt('Enter a new student name:');
    if (newStudentName) {
      setStudentNames((prevNames) => [...prevNames, newStudentName]);
    }
  };

  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {studentNames.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      <button onClick={addStudentName}>Add Student</button>
    </div>
  );
};

export default StudentList;
