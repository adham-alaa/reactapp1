import React, { useState } from 'react';
import './App.css'; // Assuming you have a CSS file for styles

function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    const newCount = count + 1;
    setCount(newCount);
    
    if (newCount === 69) {
      alert("Nice!");
    }
  };

  const decrementCount = () => {
    const newCount = count - 1;
    setCount(newCount);
    
    if (newCount === 69) {
      alert("Nice!");
    }
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <div className="all">
      <div className="p-8 bg-white rounded-lg shadow-md">
        {/* <h1 className="label">Counter</h1> */}
        
        <div className="flex items-center justify-center mb-6">
          <span className="counter">{count}</span>
        </div>
        
        <div className="buttons">
          <button 
            onClick={decrementCount}
            className="decrease"
          >
            Decrease
          </button>
          
          <button
            onClick={resetCount}
            className="reset"
          >
            Reset
          </button>
          
          <button
            onClick={incrementCount}
            className="increase"
          >
            Increase
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;