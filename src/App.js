import { Switch, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Home from './Home';
import Contacts from './Contacts';

const axios = require('axios');

const App = () => {
  const [contacts, setContacts] = useState([]);

  axios
    .get('./contacts.json')
    .then((response) => {
      setContacts(response);
    })
    .catch((error) => {
      console.error(error);
    });

  const addContact = (newContact) => {
    setContacts((contacts) => [...contacts, newContact]);
  };

  return (
    <div className="container">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          path="/contacts"
          render={() => (
            <Contacts addContact={addContact} contacts={contacts} />
          )}
        />
      </Switch>
    </div>
  );
};

export default App;
