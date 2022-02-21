import { Switch, Route,  } from 'react-router-dom';
import React, { useState } from 'react';
import Header from './components/Header';
import Button from './components/Button';
import Contacts from './components/Contacts';
import New from './components/New';
import Info from './components/Info';


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
            </>
          )}
        />
        <Route
          exact path="/contacts"
          render={(props) => (
            <Contacts history={props.history} addContact={addContact} contacts={contacts} />
          )}
        />
        <Route 
          exact path="/contacts/new"
          render={(props) => (
            <New addContact={addContact} history={props.history} contacts={contacts} />
          )} />
        <Route 
          exact path='/contacts/info'
          render={(props) => (
            <Info history={props.history} contacts={contacts} />
        )} />
      </Switch>
    </div>
  );
};

export default App;
