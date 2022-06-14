import logo from './logo.svg';
import './App.css';
import {sum} from '@package/utils'
import {printf} from '@package/commons'

function App() {
  printf('Import from @package/commons')

  return (
    <div className="App">
      <header className="App-header">
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
        <h2>
        Import from @package/utils: SUM(1,2) =  {sum(1,2)}
        </h2>
      </header>
    </div>
  );
}

export default App;
