import './App.css';
import CreateGarden from './components/CreateGarden'
import {BrowserRouter as Router, Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        The Garden Tracker
      </header>
      <Router >
        {/* replace with a fetch garden or send fetch garden to create garden add router? */}
        <CreateGarden />
      </Router>
    </div>
  );
}

export default App;
