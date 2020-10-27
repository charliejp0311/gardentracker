import './App.css';
import Garden from './components/Garden';
import CreateGarden from './components/CreateGarden'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Track your success
        <CreateGarden />
      </header>
      <Garden />
    </div>
  );
}

export default App;
