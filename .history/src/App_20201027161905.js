import './App.css';
import Garden from './components/Garden';
import CreateGarden from './components/CreateGarden';
import { connect } from 'react-redux';

function App() {
  state = {
    gardens:[],
    plants:[],
    notes:[]
  }
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

export default connect()(App);
