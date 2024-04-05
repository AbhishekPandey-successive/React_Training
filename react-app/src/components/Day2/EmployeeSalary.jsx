// .Create a functional component named EmployeeSalary that displays the average salary of a list of employees.
// Define an array of employee objects, where each object has a name and salary property.
// Use the useMemo hook to calculate the average salary of employees.
// Ensure that the useMemo hook has a dependency on the employee data so that it recalculates when the employee data changes.
// Render the average salary on the screen.
// Include a button that, when clicked, updates the employee data with new salaries.

import React, { useState, useMemo } from 'react';

const EmployeeSalary = () => {
  
  const [employees, setEmployees] = useState([
    { name: 'Alice', salary: 60000 },
    { name: 'Bob', salary: 75000 },
    { name: 'Charlie', salary: 90000 },
    
  ]);

  
  const averageSalary = useMemo(() => {
    const totalSalary = employees.reduce((sum, emp) => sum + emp.salary, 0);
    return totalSalary / employees.length;
  }, [employees]);

  

  const updateSalaries = () => {
    
    const updatedEmployees = employees.map((emp) => ({
      ...emp,
      salary: emp.salary + Math.floor(Math.random() * 5000),
    }));
    setEmployees(updatedEmployees);
  };
  

  return (
    <div>
      <h2>Employee Salaries</h2>
      <ul>
        {employees.map((emp) => (
          <li key={emp.name}>
            {emp.name}: ${emp.salary.toLocaleString()}
          </li>
        ))}
      </ul>
      <p>Average Salary: ${averageSalary.toLocaleString()}</p>
      <button onClick={updateSalaries}>Update Salaries</button>
    </div>
  );
};

export default EmployeeSalary;
