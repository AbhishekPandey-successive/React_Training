import { useState, useEffect } from 'react';

const useTimer = (countdownDuration) => {
  const [remainingTime, setRemainingTime] = useState(countdownDuration);
  const [isRunning, setIsRunning] = useState(false);

  
  const startTimer = () => {
    setIsRunning(true);
  };

  
  const pauseTimer = () => {
    setIsRunning(false);
  };

  
  const resetTimer = () => {
    setRemainingTime(countdownDuration);
    setIsRunning(false);
  };

  useEffect(() => {
    let intervalId;

    if (isRunning && remainingTime > 0) {
      intervalId = setInterval(() => {
        setRemainingTime((prevTime) => prevTime - 1000); 
      }, 1000);
    } else if (remainingTime === 0) {
      setIsRunning(false);
    }

    return () => clearInterval(intervalId);
  }, [isRunning, remainingTime]);

  return {
    remainingTime,
    isRunning,
    startTimer,
    pauseTimer,
    resetTimer,
  };
};

export default useTimer;
