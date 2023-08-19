import { useState } from 'react';
import Header from './Header';
import Main from './Main';
import defaultContacts from './contacts.json';

const App = () => {
  const [contacts, setContacts] = useState(defaultContacts.contacts);

  const addContact = (contact) => {
    setContacts((currentContacts) => [...currentContacts, contact]);
  };

  const deleteContact = (id) => {
    setContacts((currentContacts) =>
      currentContacts.filter((c) => c.id !== parseInt(id))
    );
  };

  return (
    <div>
      <Header />
      <Main
        contacts={contacts}
        addContact={addContact}
        deleteContact={deleteContact}
      />
    </div>
  );
};

export default App;
