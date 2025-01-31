// 7.Create a functional component called Notification.
// Use the useState hook to manage a state variable named message initialized to an empty string.
// Use the useEffect hook to show a notification message for 5 seconds whenever the message state changes.
// Render the notification message in a <div> element.
// After 5 seconds, clear the message to hide the notification.

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
