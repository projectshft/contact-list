import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom';
import ContactList from './components/ContactList';
import data from '../src/components/data.json'
import NewContact from './components/NewContact'
import DisplayContact from './components/DisplayContact';

// map the data to contacts array which will be passed as a prop to the other components
const contacts = data.contacts.map(c => {return c});


const App = () => {

  // history allows for easy routing
  const history = useHistory();

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'><ContactList contacts={contacts} history={history}/></Route>
        <Route path='/contacts/:index'><DisplayContact contacts={contacts}/></Route>
        <Route path='/newcontact'><NewContact contacts={contacts} history={history}/></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
