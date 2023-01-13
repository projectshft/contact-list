import React, { useState, useEffect} from "react";
import './App.css';
import ContactItem from "./componenets/contact-item";
import ContactsList from "./componenets/contacts-list";
import AddContact from "./componenets/add-contact";



function App() {
  // Rename Document Title (using as componentDidMount)
  useEffect(() => {
    document.title = "Contacts App";
  }, []);
  
  // Define initial state of contacts and define setContacts method(?) -- setup useState hook
  const [contacts, setContacts] = useState([])

  // Fetch contacts data from JSON file. (using as componentDidUpdate)
  useEffect(() => {
    fetch('data.json')
    .then((response) => response.json())
    .then((data) => setContacts(data))
    .catch(error => {
      console.error(error);
    });

    // (use as componentWillUnmount to clean up when component is no longer in use)
    return () => {}
  });

  // Func to add new contact
  const addContact = (contact) => {
    setContacts()
  }

  return (
    <div className="container">
      <div className="row">
        <h1 className="text-center">👯 Contacts App 👥</h1>
        <ContactsList />
        <ContactItem />
        <AddContact />
      </div>
    </div>
  )
}

export default App;