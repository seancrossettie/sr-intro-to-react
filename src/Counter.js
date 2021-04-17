import React, { useState } from 'react';

function Counter() {
  const [counter, setCounter] = useState(0);
  const [userInput, setUserInput] = useState(0);
  const [counterName, setCounterName] = useState("Counter")

  return (
    <>
      <input onChange={(e) => setCounterName(e.target.value)}></input>
      <h1>{counterName}</h1>
      <h2>{counter}</h2>
      <input 
        onChange={(e) => setUserInput(Number(e.target.value))}>
      </input><br />

      <button 
        onClick={() => setCounter((prevState) => prevState + userInput)}>
          Increase by {userInput}
      </button>

      {counter <= 0 ? '' : 
      <button 
          onClick={() => setCounter((prevState) => prevState - userInput)}>
          Decrease by {userInput}
      </button>
      }
  
      <button onClick={() => setCounter(0)}>Reset</button>
    </>
  );
}

export default Counter;
