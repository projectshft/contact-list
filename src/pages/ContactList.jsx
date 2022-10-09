import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { contactData } from '../data/contactData';

export default function ContactList() {
  const [contacts, setContacts] = useState(contactData);

  useEffect(() => {
    const nextContacts = [...contacts];
    setContacts(() => nextContacts.sort((a, b) => (a.first.toLowerCase() > b.first.toLowerCase() ? 1 : -1)));
  }, [JSON.stringify(contacts)]); // works.. not sure best implementation

  const handleDeleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  return (
    <div className="flex flex-col items-start justify-start h-screen bg-blue-50">
      <div className="flex h-16 w-full">
        <Header />
      </div>
      <div className="flex flex-row w-full overflow-clip p-4">
        <Sidebar contacts={contacts} handleDeleteContact={handleDeleteContact} />
        <Outlet context={[contacts, setContacts]} />
      </div>
    </div>
  );
}
