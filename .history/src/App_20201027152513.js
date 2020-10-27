import logo from './logo.svg';
import './App.css';
import Garden from './components/Garden';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Garden />
    </div>
  );
}

export default App;
