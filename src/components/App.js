import '../App.css';
import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import NewContact from './NewContact';
import User from './User';

function App() {
  const [contacts, setContacts] = useState([]);

  const addContact = (name, email, phone, imageUrl) => {
    const newContact = { name, email, phone, imageUrl };
    setContacts([...contacts, newContact]);
  };

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" render={() => <Home contacts={contacts} />} />
        <Route
          path="/new-contact"
          render={(routerProps) => (
            <NewContact addContact={addContact} history={routerProps.history} />
          )}
        />
        <Route path="/:user" component={User} />
      </Switch>
    </div>
  );
}

export default App;
