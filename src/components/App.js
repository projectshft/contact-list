import '../App.css';
import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import Home from './Home';
import NewContact from './NewContact';
import User from './User';

function App() {
  const [contacts, setContacts] = useState([]);
  const [currentContact, setCurrentContact] = useState(null);

  // axios.get('./data.json').then(({ data }) => {
  //   setContacts(data.contacts);
  // });

  const addContact = (name, email, phone, imageUrl, id) => {
    const newContact = { name, email, phone, imageUrl, id };
    setContacts([...contacts, newContact]);
  };

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route
          exact
          path="/"
          render={(routerProps) => (
            <Home
              contacts={contacts}
              setCurrentContact={setCurrentContact}
              history={routerProps.history}
            />
          )}
        />
        <Route
          path="/new-contact"
          render={(routerProps) => (
            <NewContact addContact={addContact} history={routerProps.history} />
          )}
        />
        <Route
          path="/:user"
          render={() => (
            <User
              setCurrentContact={setCurrentContact}
              contactInfo={currentContact}
            />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
