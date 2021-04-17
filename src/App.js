// import logo from './logo.svg';
import './App.css';

function App() {
  const cohort = 14;
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
      {cohort === 14 ? <h1>Welcome to Cohort 14!</h1> : <h1>Wrong Cohort!</h1>}
    </>
  );
}

export default App;
