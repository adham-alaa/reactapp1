import React, { useState } from 'react';
import './App.css';

function Counter() {

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
      
          <p className="counter">{count}</p>
          
          <div className="buttons">
            <button onClick={decrementCount} className="decrease">Decrease</button>
            
            <button onClick={resetCount} className="reset">Reset </button>
            
            <button onClick={incrementCount}className="increase">Increase</button>
          </div>
        </div>
    
      
        
    );
    
}

export default Counter;