import React, { useState, useEffect} from "react";
import './App.css';
import ContactItem from "./componenets/contact-item";
import ContactsList from "./componenets/contacts-list";
import AddContact from "./componenets/add-contact";



function App() {
  useEffect(() => {
    document.title = "Contacts App";
  }, []);

  return (
    <div className="container">
      <div className="row">
        <ContactsList />
        <ContactItem />
        <AddContact />
      </div>
    </div>
  )
}

export default App;