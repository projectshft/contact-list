import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import IndividualContact from './components/IndividualContact';
import NewContact from './components/NewContact';
import EditContact from './components/EditContact';

const Header = () => (
  <div className="row">
    <h1>Your Contact List</h1>
  </div>
);

function App() {
  return (
    <div className="App container">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contacts" component={Home} />
        <Route path="/contacts/new" component={NewContact} />
        <Route path="/contacts/:id" component={IndividualContact} />
        <Route path="/contacts/:id/edit" component={EditContact} />
      </Switch>
    </div>
  );
}

export default App;
