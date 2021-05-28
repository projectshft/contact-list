import { Switch, Route } from "react-router-dom";
import React, { useState } from "react";
import "./App.css";
import Home from "./Home";

const App = () => {
  const [contacts, setContact] = useState([]);

  const addContact = (contact) => {
    setContact((contacts) => {
      return [...contacts, contact];
    });
  };

  const editContact = (contact) => {
    const editId = contact.id;
    const index = contacts.findIndex((contact) => contact.id === editId);
    const updatedContacts = [
      ...contacts.slice(0, index),
      contact,
      ...contacts.slice(index + 1, contacts.length),
    ];
    setContact(updatedContacts);
  };

  const deleteContact = (contactToDelete) => {
    const updatedContacts = contacts.filter(
      (contact) => contact.id !== contactToDelete.deleteId
    );
    setContact(updatedContacts);
  };

  return (
    <div class="home">
      <h1>Contact List</h1>
      <Switch>
        <Route
          path="/contacts"
          render={() => (
            <Home
              addContact={addContact}
              editContact={editContact}
              deleteContact={deleteContact}
              contacts={contacts}
            />
          )}
        />
      </Switch>
    </div>
  );
};

export default App;
