import logo from './logo.svg';
import './App.css';

function App() {
  const name = 'Jason';
  const handleNameChange = () => {
    const names = ['Jason', 'Crystal', 'T-Rex'];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to see what {name} changes.
        </p>
        <p>Hello {handleNameChange()}!</p>
      </header>
    </div>
  );
}

export default App;
