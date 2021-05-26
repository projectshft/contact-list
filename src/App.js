import { Switch, Route } from "react-router-dom";
import React, { useState } from "react";
import Home from "./Home";

const App = () => {
  const [contacts, setContact] = useState([
    {
      id: "193746sdf284",
      name: "Lauren Nicholls",
      image_url:
        "https://12ax7web.s3.amazonaws.com/accounts/1/products/1986199880919/Stay-Weird-Stitch_800x800_SEPS-1000x1000.jpg",
      email: "lauren.nicholls1@gmail.com",
      phone_number: "555-555-5555",
    },
    {
      id: "138746sdf736",
      name: "Bryan Nicholls",
      image_url:
        "https://i.natgeofe.com/k/a9236635-6a24-466f-81d8-dc4f36d5053a/chipmunk-cheeks.jpg",
      email: "bryan@gmail.com",
      phone_number: "555-555-5555",
    },
  ]);

  const addContact = (contact) => {
    setContact((contacts) => {
      return [...contacts, contact];
    });
  };

  const editContact = (contact) => {
    const id = contact.id;
    const index = contacts.findIndex((contact) => contact.id === id);
    const updatedContacts = [
      ...contacts.slice(0, index),
      contact,
      ...contacts.slice(index + 1, contacts.length),
    ];
    setContact(updatedContacts);
  };

  const confirmDeleteContact = (contact) => {
    const id = contact.id;
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    setContact(updatedContacts);
  };

  return (
    <div>
      <h1>Contact List</h1>
      <Switch>
        <Route
          path="/contacts"
          render={() => (
            <Home
              addContact={addContact}
              editContact={editContact}
              confirmDeleteContact={confirmDeleteContact}
              contacts={contacts}
            />
          )}
        />
      </Switch>
    </div>
  );
};

export default App;
