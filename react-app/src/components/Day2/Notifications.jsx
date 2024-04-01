import React, { useState, useEffect } from 'react';

function Notifications() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    
    if (message) {
      const timeoutId = setTimeout(() => {
        setMessage('');
      }, 5000);

    
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [message]);

  const handleShowNotification = () => {
    
    setMessage('New notification!');

    
  };

  return (
    <div>
      <div>{message && <p>{message}</p>}</div>
      <button onClick={handleShowNotification}>Show Notification</button>
    </div>
  );
}

export default Notifications;
