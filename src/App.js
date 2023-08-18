import { useState } from 'react';
import Header from './Header';
import Main from './Main';
import defaultContacts from './contacts.json';

const App = () => {
  const [contacts, setContacts] = useState(defaultContacts.contacts);

  const addContact = (contact) => {
    setContacts((currentContacts) => [...currentContacts, contact]);
  };

  return (
    <div>
      <Header />
      <Main contacts={contacts} addContact={addContact} />
    </div>
  );
};

export default App;
