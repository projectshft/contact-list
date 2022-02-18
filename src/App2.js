import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Home from "./components/Home";
import Contacts from "./components/Contacts";
import ContactForm from "./components/ContactForm";
import ContactSingle from "./components/ContactSingle";

const App = () => {
  //hard-coding in some contacts just to have something present
  const [contacts, setContacts] = useState([
    {
      id: Math.round(Math.random() * 100000000),
      fName: "Jerry",
      lName: "Hutchinson",
      image:
        "https://st.depositphotos.com/1269204/1219/i/600/depositphotos_12196477-stock-photo-smiling-men-isolated-on-the.jpg",
      email: "jerry_fabulous@gmail.com",
      phone: `410-920-5555`,
    },
    {
      id: Math.round(Math.random() * 100000000),
      fName: "Lola",
      lName: "Steele",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&w=1000&q=80",
      email: "lola1000@aol.com",
      phone: `919-420-8500`,
    },
  ]);

  const addContact = (contactObject) => {
    setContacts((contacts) => {
      return [...contacts, contactObject];
    });
  };

  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          exact
          path="/contacts"
          element={<Contacts contacts={contacts} />}
        />
        <Route
          path="/contacts/:id"
          render={(routerProps) => (
            <ContactSingle
              contactId={parseInt(routerProps.match.params.id, 10)}
              contacts={contacts}
            />
          )}
        />
        <Route
          path="/contacts/new"
          element={
            <ContactForm contacts={contacts} onAddContact={addContact} />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
