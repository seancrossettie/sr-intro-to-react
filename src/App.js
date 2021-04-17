import './App.css';
import React from 'react'
import Counter from './Counter'

function App() {
  return (
  <>
      <Counter appName="Counter 1" startValue={200} />
      <Counter appName="Counter 2" startValue={200} />
      <Counter appName="Counter 3" startValue={200} />
  </>
  )
}

export default App;
