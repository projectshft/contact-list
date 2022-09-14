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

  const generateId = () => Math.round(Math.random() * 100000000);
  const sortedContacts = contacts.sort((a, b) =>
    a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1
  );

  const addUpdateContact = (newContact) => {
    console.log(newContact);
    if (newContact.id) {
      setContacts(
        contacts.map((contact) => {
          if (contact.id === newContact.id) {
            return newContact;
          }
          return contact;
        })
      );
    } else {
      setContacts([
        ...contacts,
        {
          ...newContact,
          id: generateId(),
        },
      ]);
    }
  };

  return (
    <main>
      <Contacts contacts={contacts} addUpdateContact={addUpdateContact} />
      <ContactList contacts={sortedContacts} />
    </main>
  );
};

export default Main;
