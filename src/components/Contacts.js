import { Routes, Route } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';

import Contact from './Contact';
import FullContacts from './FullContacts';
import NewContact from './NewContact';
import getUsers from '../api/getUsers';

const Contacts = () => {
  const [users, setUsers] = useState([]);

  // trying to fix eslint errors and this is the solution I came up with
  const fetchContacts = useCallback(async () => {
    const contacts = await getUsers();
    setUsers(contacts);
  }, [setUsers]);

  useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);

  return (
    <Routes>
      <Route index element={<FullContacts users={users} />} />
      <Route path="new" element={<NewContact />} />
      <Route path=":id" element={<Contact users={users} />} />
    </Routes>
  );
};

export default Contacts;
