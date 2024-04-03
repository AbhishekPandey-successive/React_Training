import React from 'react';
import useTimer from './useTimer'; 

const CountdownComponent = () => {
  const { remainingTime, isRunning, startTimer, pauseTimer, resetTimer } =
    useTimer(1); 

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div>
      <h2>Countdown Timer</h2>
      <p>Remaining time: {formatTime(remainingTime)}</p>
      {isRunning ? (
        <button onClick={pauseTimer}>Pause</button>
      ) : (
        <button onClick={startTimer}>Start</button>
      )}
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default CountdownComponent;
