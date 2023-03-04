import HomePage from './components/Home';
import Add from './components/Add';
import './App.css';
import { ContactProvider } from './components/Context';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/NavBar';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
        <ContactProvider>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/addContact">
          <Add />
        </Route>
        </ContactProvider>
      </Router>

</div>
  );
}

export default App;
