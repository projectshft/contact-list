import './App.css';
import { Switch, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Home from './Home';
import Contacts from './Contacts';

const App = () => {
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: 'Albert Einstein',
      pictureUrl:
        'https://upload.wikimedia.org/wikipedia/commons/3/3e/Einstein_1921_by_F_Schmutzer_-_restoration.jpg',
      email: 'albert@princeton.edu',
      phone: '1111111111',
    },
    {
      id: 2,
      name: 'Isaac Newton',
      pictureUrl:
        'https://upload.wikimedia.org/wikipedia/commons/3/3b/Portrait_of_Sir_Isaac_Newton%2C_1689.jpg',
      email: 'inewton@cam.ac.uk',
      phone: '2222222222',
    },
    {
      id: 3,
      name: 'Marie Curie',
      pictureUrl:
        'https://www.nobelprize.org/images/marie-curie-12835-content-portrait-mobile-tiny.jpg',
      email: 'marie@curie.org',
      phone: '3333333333',
    },
    {
      id: 4,
      name: 'Pierre Curie',
      pictureUrl:
        'https://www.nobelprize.org/images/pierre-curie-12836-content-portrait-mobile-tiny.jpg',
      email: 'pierre@curie.org',
      phone: '3333333333',
    },
  ]);

  const addContact = (newContact) => {
    setContacts((currContacts) => [...currContacts, newContact]);
  };

  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          path="/contacts"
          render={() => (
            <Contacts contacts={contacts} addContact={addContact} />
          )}
        />
      </Switch>
    </div>
  );
};

export default App;
