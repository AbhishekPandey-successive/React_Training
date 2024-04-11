
import React from 'react';

const ChildComponent = ({ increment }) => {
  const handleReset = () => {
    increment(); 
  };

  return (
    <div>
      <h3>Child Component</h3>
      
      <button onClick={handleReset}>Reset Count</button>
    </div>
  );
};

export default ChildComponent;