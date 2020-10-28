import './App.css';
import CreateGarden from './components/CreateGarden'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        The Garden Tracker
      </header>
        {/* replace with a fetch garden or send fetch garden to create garden */}
        <CreateGarden />
    </div>
  );
}

export default App;
