import './App.css';
import { Route, Redirect } from 'react-router-dom';
import React, { useState } from 'react';
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
      name: 'Marie Curie',
      pictureUrl:
        'https://www.nobelprize.org/images/marie-curie-12835-content-portrait-mobile-tiny.jpg',
      email: 'marie@curie.org',
      phone: '2222222222',
    },
    {
      id: 3,
      name: 'Pierre Curie',
      pictureUrl:
        'https://www.nobelprize.org/images/pierre-curie-12836-content-portrait-mobile-tiny.jpg',
      email: 'pierre@curie.org',
      phone: '2222222222',
    },
  ]);

  const addContact = (newContact) => {
    setContacts((currContacts) => [...currContacts, newContact]);
  };

  return (
    <div>
      <Redirect from="/" to="/contacts" exact />
      <Route
        path="/contacts"
        render={() => <Contacts contacts={contacts} addContact={addContact} />}
      />
    </div>
  );
};

export default App;
