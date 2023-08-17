import { useState } from 'react';
import Header from './Header';
import Main from './Main';
import defaultContacts from './contacts.json';

const App = () => {
  const [contacts, setContacts] = useState(defaultContacts.contacts);

  return (
  <div>
    <Header />
    <Main contacts={contacts}/>
  </div>
  );
};

export default App;
