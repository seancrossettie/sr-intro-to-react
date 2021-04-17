import './App.css';
import React from 'react'
import Counter from './Counter'

function App() {

  const array = [ 
    {
      appName: "Counter 1",
      startValue: 200
    },
    {
      appName: "Counter 2",
      startValue: 20
    },
    {
      appName: "Counter 3",
      startValue: 1
    },
    {
      appName: "Counter 4",
      startValue: 1.4
    },
  ];

  return (
  <>
    { array.map((counter, i) => <Counter key={i} appName={counter.appName} 
    startValue={counter.startValue}/>)
    }
  </>
  )
}

export default App;
