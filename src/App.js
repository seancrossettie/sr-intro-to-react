import React, { useState } from 'react';
import './App.css';

function App() {
  let [counter, setCounter] = useState(0);

  return (
    <>
      <h1>Counter</h1>
      {counter}
      <button onClick={() => setCounter(counter + 1)}>Increase by 1</button>
      <button onClick={() => setCounter(counter - 1)}>Decrease by 1</button>
      <button onClick={() => setCounter(counter * 3.14)}>Multiply by 3.14</button>
      <button onClick={() => setCounter(counter = 0)}>Reset</button>
    </>
  );
}

export default App;
