import React, { useState, useEffect } from 'react';
import { Countdown } from './ChildComponents';

const ToggleMessage = () => {
  // Exercise 1: State for multiple messages
  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);

  useEffect(() => {
    console.log("ToggleMessage Main: Mounted");
    return () => console.log("ToggleMessage Main: Unmounted");
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>React Lab Exercises</h1>

      {/* Exercise 1: Separate buttons for separate messages */}
      <div style={{ marginBottom: '20px' }}>
        <button onClick={() => setShowFirst(!showFirst)}>
          {showFirst ? 'Hide' : 'Show'} First Message
        </button>
        
        <button onClick={() => setShowSecond(!showSecond)} style={{ marginLeft: '10px' }}>
          {showSecond ? 'Hide' : 'Show'} Second Message & Timer
        </button>
      </div>

      {/* Exercise 1: Simple toggle message */}
      {showFirst && <p>✅ This is the first toggleable message!</p>}

      {/* Exercise 3 & 4: Passing props and conditional rendering */}
      <Countdown 
        message="Active Session Timer" 
        isVisible={showSecond} 
      />
    </div>
  );
};

export default ToggleMessage;