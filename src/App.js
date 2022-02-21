import { Switch, Route, Link } from 'react-router-dom';
import React, { useState } from 'react';
import Header from './components/Header';
import Button from './components/Button';
import Contacts from './components/Contacts';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const addContact = (contact) => {
    setContacts((contacts) => [...contacts, contact]);
  };
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <>
              <Header />
              <Button />
              <Link to="/contacts">Contacts</Link>
            </>
          )}
        />
        <Route
          path="/contacts"
          render={(props) => (
            <Contacts addContact={addContact} history={props.history} contacts={contacts} />
          )}
        />
        {/* <Route 
          Path="/contacts"
          render={(props) => (
            <Table addContact={addContact} history={props.history} contacts={contacts} />
          )} */}
      </Switch>
    </div>
  );
};

export default App;
