import { Routes, Route, useNavigate } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import Contacts from './Contacts';
import Home from './Home';
import NotHome from './NotHome';
import getUsers from '../api/getUsers';

export default function Main() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

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

  // Remove user with id passed to function
  const removeUser = useCallback(
    (id) =>
      setUsers((prevUsers) => {
        const currentUsers = [...prevUsers];
        // Filters out user with the id passed to removeUser
        const updatedUsers = currentUsers.filter((user) => user.id !== id);
        return updatedUsers;
      }),
    []
  );

  // Updates the user with id passed with the user object passed
  const updateUserData = useCallback((id, updatedUser) => {
    setUsers((prevUsers) => {
      // Get previous state
      const currentUsers = [...prevUsers];
      // Replace user with same id with the updated data
      const newUsers = currentUsers.map((user) => {
        if (user.id === id) {
          return updatedUser;
        }
        return user;
      });
      return newUsers;
    });
  }, []);

  const editUser = useCallback(
    (id) => navigate(`./contacts/${id}/edit`),
    [navigate]
  );

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="contacts/*"
        element={
          <Contacts
            addUser={addUser}
            users={users}
            removeUser={removeUser}
            editUser={editUser}
            updateUserData={updateUserData}
          />
        }
      />
      <Route path="*" element={<NotHome />} />
    </Routes>
  );
}
