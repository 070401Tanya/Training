import React, { useState, useRef } from 'react';

function Timer() {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const timerRef = useRef(null);

  const startTimer = () => {
    setIsRunning(true);
    timerRef.current = setInterval(() => {
      setElapsedTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  const stopTimer = () => {
    setIsRunning(false);
    clearInterval(timerRef.current);
    setElapsedTime(0);
  };

  const pauseTimer = () => {
    setIsRunning(false);
    clearInterval(timerRef.current);
  };

  return (
    <div>
      <h2>Simple Timer</h2>
      <p>Elapsed Time: {elapsedTime} seconds</p>
      <button onClick={startTimer} >
        Start
      </button>
      <button onClick={pauseTimer} >
        Pause
      </button>
      <button onClick={stopTimer} >
        Stop
      </button>
    </div>
  );
}

export default Timer;
