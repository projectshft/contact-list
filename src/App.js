import { useState } from 'react';
import ContactListAPI from './data/ContactListAPI';

export default function App() {
  const [contacts, setContacts] = useState(ContactListAPI);

  console.log(contacts);

  return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
}
