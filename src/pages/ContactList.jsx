import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { contactData } from '../data/contactData';

const ContactList = () => {
  const [contacts, setContacts] = useState(contactData);

  useEffect(() => {
    const nextContacts = [...contacts];
    setContacts(() => nextContacts.sort((a, b) => (a.first.toLowerCase() > b.first.toLowerCase() ? 1 : -1)));
  }, [JSON.stringify(contacts)]); // works.. not sure best implementation

  const handleDeleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  return (
    <div className="flex h-screen flex-col items-start justify-start bg-slate-200">
      <div className="flex h-16 w-full">
        <Header />
      </div>
      <div className="flex h-full w-full flex-row overflow-hidden text-clip p-4">
        <Sidebar contacts={contacts} handleDeleteContact={handleDeleteContact} />
        <Outlet context={[contacts, setContacts]} />
      </div>
    </div>
  );
};

export default ContactList;
