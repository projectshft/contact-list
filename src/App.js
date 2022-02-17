// import "./App.css";
import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Header from "./components/Header";
import Contacts from "./components/Contacts";
import ContactForm from "./components/ContactForm";

//Starting with some default contacts
const App = () => {
  const [contacts, setContact] = useState([
    {
      number: 1,
      fName: "Jerry",
      lName: "Hutchinson",
      image:
        "https://st.depositphotos.com/1269204/1219/i/600/depositphotos_12196477-stock-photo-smiling-men-isolated-on-the.jpg",
      email: "jerry_fabulous@gmail.com",
      phone: "410-920-5555",
    },
    {
      number: 2,
      fName: "Lola",
      lName: "Steele",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&w=1000&q=80",
      email: "lola1000@aol.com",
      phone: `919-420-8500`,
    },
  ]);

  const addContact = (contact) => {
    setContact((contacts) => {
      return [...contacts, contact];
    });
  };

  return (
    <div>
      <Header />
      <Routes>
        <Route
          exact
          path="/"
          element={<Contacts contacts={contacts} addContact={addContact} />}
        />
        <Route
          path="/contact-form"
          element={<ContactForm addContact={addContact} />}
        />
      </Routes>
    </div>
  );
};

//What we need - home page, contactFormPage, contactPage(for specific player)

export default App;
