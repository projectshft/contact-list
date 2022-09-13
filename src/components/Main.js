import { Switch, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Contacts from './Contacts';
import ContactList from './ContactList';

const Main = () => {
  const [contacts, setContacts] = useState([
    {
      id: 70219577,
      name: 'Sophie Marceau',
      imageUrl:
        'https://www.alohacriticon.com/wp-content/uploads/2003/07/sophie-marceau-fotos-peliculas.jpg',
      email: 'sophie@example.com',
      phone: '1552343245',
    },
    {
      id: 70219578,
      name: 'Albert Einstein',
      imageUrl: 'https://scx1.b-cdn.net/csz/news/800a/2015/alberteinste.jpg',
      email: 'aeinstein@example.com',
      phone: '1342423455',
    },
  ]);

  const addContact = (contact) => {
    const newContacts = [...contacts, contact];
    return setContacts(newContacts);
  };

  return (
    <main>
      <Switch>
        <Route
          path="/"
          render={() => (
            <Contacts contacts={contacts} addContact={addContact} />
          )}
        />
      </Switch>
      <ContactList contacts={contacts} />
    </main>
  );
};

export default Main;
