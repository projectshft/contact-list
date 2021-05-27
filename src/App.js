import { Switch, Route } from "react-router-dom";
import React, { useState } from "react";
import "./App.css";
import Home from "./Home";

const App = () => {
  const [contacts, setContact] = useState([
    // {
    //   id: "193746sdf284",
    //   name: "Lauren Nicholls",
    //   image_url:
    //     "https://12ax7web.s3.amazonaws.com/accounts/1/products/1986199880919/Stay-Weird-Stitch_800x800_SEPS-1000x1000.jpg",
    //   email: "lauren.nicholls1@gmail.com",
    //   phone_number: "555-555-5555",
    // },
    // {
    //   id: "138746sdf736",
    //   name: "Bryan Nicholls",
    //   image_url:
    //     "https://i.natgeofe.com/k/a9236635-6a24-466f-81d8-dc4f36d5053a/chipmunk-cheeks.jpg",
    //   email: "bryan@gmail.com",
    //   phone_number: "555-555-5555",
    // },
    // {
    //   id: "13874kgjksd36",
    //   name: "Owen Nicholls",
    //   image_url:
    //     "https://i.pinimg.com/originals/c8/40/83/c84083388321e25dab7c7ce113ee23f6.png",
    //   email: "owen@gmail.com",
    //   phone_number: "539-555-5555",
    // },
    // {
    //   id: "13874kgsjksd36",
    //   name: "Eli Nicholls",
    //   image_url:
    //     "https://i.pinimg.com/736x/b2/09/6d/b2096db0b3e1655e83b518c426ad9aa9.jpg",
    //   email: "eli@gmail.com",
    //   phone_number: "539-595-5590",
    // },
    // {
    //   id: "13874fkgjksd36",
    //   name: "Onyx Nicholls",
    //   image_url:
    //     "https://i.pinimg.com/736x/b2/09/6d/b2096db0b3e1655e83b518c426ad9aa9.jpg",
    //   email: "onyx@gmail.com",
    //   phone_number: "548-595-5590",
    // },
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
