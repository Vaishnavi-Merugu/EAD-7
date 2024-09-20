import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setSeconds(0);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1 style={{ fontSize: '3rem' }}>{seconds}s</h1>
      <button onClick={toggleTimer} style={{ margin: '10px', padding: '10px 20px' }}>
        {isActive ? 'Pause' : 'Start'}
      </button>
      <button onClick={resetTimer} style={{ margin: '10px', padding: '10px 20px' }}>
        Reset
      </button>
    </div>
  );
}

export default Timer;
