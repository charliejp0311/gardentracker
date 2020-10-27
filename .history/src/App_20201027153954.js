import logo from '../sun-svgrepo-com.svg';
import './App.css';
import Garden from './components/Garden';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Track your success
      </header>
      <Garden logo={logo}/>
    </div>
  );
}

export default App;
