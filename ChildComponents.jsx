import React, { useState, useEffect } from 'react';

// Exercise 3 & 4: Countdown with Cleanup and Prop-based rendering
export const Countdown = ({ message, isVisible }) => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // Exercise 2: Console log for Mount
    console.log("Countdown Component: Mounted");

    // Exercise 4: Start timer on mount
    const timer = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    // Exercise 2 & 4: Cleanup function for Unmount
    return () => {
      console.log("Countdown Component: Unmounted");
      clearInterval(timer);
    };
  }, []);

  // Exercise 3: Display only if toggle (isVisible) is true
  if (!isVisible) return null;

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', marginTop: '10px' }}>
      <h3>{message}</h3>
      <p>Timer: {seconds} seconds</p>
    </div>
  );
};