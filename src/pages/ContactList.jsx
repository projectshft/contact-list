import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { contactData } from '../data/contactData';

export default function ContactList() {
  const [contacts, setContacts] = useState(contactData);
  const [filteredContacts, setFilteredContacts] = useState(contacts);

  useEffect(() => {
    const nextContacts = [...contacts];
    setContacts(() => nextContacts.sort((a, b) => (a.first.toLowerCase() > b.first.toLowerCase() ? 1 : -1)));
  }, [JSON.stringify(contacts)]); // works.. not sure best implementation

  const handleDeleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const handleSearchContacts = (e) => {
    // filteredContacts(contacts.filter((contact) => contact.first === e || contact.last === e));
  };

  return (
    <div className="flex flex-col items-start justify-start h-screen bg-blue-100">
      <div className="flex h-16 w-full">
        <Header />
      </div>
      <div className="flex flex-row w-full h-full overflow-clip p-4">
        <Sidebar
          contacts={contacts}
          handleDeleteContact={handleDeleteContact}
          handleSearchContacts={handleSearchContacts}
        />
        <Outlet context={[contacts, setContacts]} />
      </div>
    </div>
  );
}
