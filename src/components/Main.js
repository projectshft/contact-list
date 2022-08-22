import { Routes, Route, Navigate } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import Contacts from './Contacts';
import getUsers from '../api/getUsers';
import PageNotFound from './PageNotFound';

export default function Main() {
  // The model that our application will be synced with
  const [users, setUsers] = useState([]);

  // Use of useCallback() is needed to place setUsers() in useEffect() else there will be an infinite loop of API calls
  const fetchContacts = useCallback(async () => {
    const contacts = await getUsers();
    setUsers(contacts);
  }, [setUsers]);

  // Data should only be fetched once when the main component mounts
  useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);

  // Again, to fix an error addUser is placed in useCallback()
  const addUser = useCallback(
    // Passed in user and appends the array without directly mutating previous state
    (user) => setUsers((prevUsers) => [...prevUsers, user]),
    [setUsers]
  );

  // Remove user with id passed to function from users state
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

  return (
    <Routes>
      <Route index element={<Navigate replace to="/contacts" />} />
      <Route
        path="contacts/*"
        element={
          <Contacts
            addUser={addUser}
            users={users}
            removeUser={removeUser}
            updateUserData={updateUserData}
          />
        }
      />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
