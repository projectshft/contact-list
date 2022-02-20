import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Home from "./components/Home";
import ContactList from "./components/ContactList";
import ContactForm from "./components/ContactForm";
import EditForm from "./components/EditForm";
import ContactSingle from "./components/ContactSingle";
import PropTypes from "prop-types";

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

  //Adding contacts to our data
  const addContact = (contactObject) => {
    //Image is the only non-required field so I am checking if it's empty and, if so, adding a placeholder;
    const image = contactObject.image;
    if (image === "") {
      contactObject.image =
        "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png";
    }

    setContacts((contacts) => {
      return [...contacts, contactObject];
    });
  };

  //Updating already existing contacts
  const handleEdit = (id, obj) => {
    const contactUpdate = contacts.find((el) => el.id === Number(id));

    setContacts(
      contacts.map((contact) => {
        return contact.id === contactUpdate.id ? obj : contact;
      })
    );
  };

  //Delete from database
  const handleDelete = (id) => {
    const updatedContacts = contacts.filter((person) => person.id !== id);
    setContacts(updatedContacts);
  };

  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          exact
          path="/contacts"
          element={<ContactList contacts={contacts} onDelete={handleDelete} />}
        />
        <Route
          path="/contacts/:id"
          element={<ContactSingle contacts={contacts} />}
        />
        <Route
          path="/contacts/:id/edit"
          element={<EditForm contacts={contacts} onEdit={handleEdit} />}
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

App.propTypes = {
  contacts: PropTypes.array,
  addContact: PropTypes.func,
  handleEdit: PropTypes.func,
  handleDelete: PropTypes.func,
};

export default App;
