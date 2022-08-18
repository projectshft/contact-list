import { Routes, Route } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';

import Contact from './Contact';
import FullContacts from './FullContacts';
import NewContact from './NewContact';
import getUsers from '../api/getUsers';

const Contacts = () => {
  const [users, setUsers] = useState([]);

  // Use of useCallback() is needed to place setUsers() in useEffect() else there is an eslint error
  const fetchContacts = useCallback(async () => {
    const contacts = await getUsers();
    setUsers(contacts);
  }, [setUsers]);

  useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);

  // Again, to fix an eslint error addUser is placed in useCallback()
  const addUser = useCallback(
    (user) => setUsers((prevUsers) => [...prevUsers, user]),
    [setUsers]
  );

  return (
    <Routes>
      <Route index element={<FullContacts users={users} />} />
      <Route path="new" element={<NewContact addUser={addUser} />} />
      <Route path=":id" element={<Contact users={users} />} />
    </Routes>
  );
};

export default Contacts;
