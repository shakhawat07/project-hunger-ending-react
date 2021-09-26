import './App.css';
import Header from './components/Header/Header';
import Persons from './components/Persons/Persons';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Persons></Persons>

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
