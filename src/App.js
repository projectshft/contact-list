import './App.css';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import AddForm from './components/add_form';
import ContactList from './components/contact_list';
import Contact from './components/contact';

function App() {
  // const [contacts, setContacts] = useState([]);

  // const addContact = function (contact) {
  //   setContacts(...contacts[contact]);
  // };

  return (
    <div className="App">
      <Switch>
        <Route exact path="/contacts" component={ContactList} />
        <Route path="/contacts/new" component={AddForm} />
        <Route path="/contacts/:id" component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
