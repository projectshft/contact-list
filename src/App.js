/* eslint-disable no-unused-vars */
// acomponent with a state of contacts with a function for adding new contacts, which is displaying contact list itself and switching to contact list ?

import { Switch, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Contacts from './Contacts';
import Home from './Home';
import './App.css';

const App = () => {
  const [contacts, setContacts] = useState([
    {
      id: 70219577,
      name: 'Albert Einstein',
      imageUrl:
        'https://en.wikipedia.org/wiki/Albert_Einstein#/media/File:Einstein_1921_by_F_Schmutzer_-_restoration.jpg',
      email: 'aeinstein@example.com',
      phoneNumber: '1555',
    },
    {
      id: 70219578,
      name: 'Albert Einstein',
      imageUrl: 'https://unsplash.com/s/photos/human',
      email: 'aeinstein@example.com',
      phoneNumber: '155',
    },
  ]);

  const addContact = (contact) => {
    const newContacts = [...contacts, contact];
    return setContacts(newContacts);
  };

  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col-md-auto">
          <h1 className="header">Contact list</h1>
        </div>
        <Switch>
          {/* <Route exact path="/" component={Home} /> */}
          <Route
            path="/contacts"
            render={() => (
              <Contacts contacts={contacts} addContact={addContact} />
            )}
          />
        </Switch>
      </div>
    </div>
  );
};

export default App;
