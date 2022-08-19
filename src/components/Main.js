import { Routes, Route } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import Contacts from './Contacts';
import Home from './Home';
import NotHome from './NotHome';
import getUsers from '../api/getUsers';

export default function Main() {
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
      <Route path="/" element={<Home />} />
      <Route
        path="contacts/*"
        element={<Contacts addUser={addUser} users={users} />}
      />
      <Route path="*" element={<NotHome />} />
    </Routes>
  );
}
