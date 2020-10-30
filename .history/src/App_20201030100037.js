import './App.css';
import CreateGarden from './components/GardenHome'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from './components/Navbar';
import Garden from './components/Garden'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        The Garden Tracker
      </header>
      <Router >
        {/* replace with a fetch garden or send fetch garden to create garden add router? */}
        <div>
        <NavBar />
        <Route path='/' render={routerProps=><CreateGarden {...routerProps} /> }/> {/* Home page what do welcome page shows gardens last event logged to the notes shows plant count shows harvest count */}
        <Route path='/garden' render={ routerProps=> <Garden {...routerProps} />}/> {/* Garden page this will show a list of the current plants and allow you to add more plants */}
        {/*<Route />*/} {/* Harvest page shows a list of harvested plants this is not editable stands as a living record of your garden*/}
        {/*<Route />*/} {/* Plant page shows the plant and a form to add notes to the plant has pre-determined buttons that  add a templated event to the plant tracker notes*/}
        </div>
      </Router>
    </div>
  );
}

export default App;
