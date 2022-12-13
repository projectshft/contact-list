import React, { useState } from "react"
import { Switch, Route, useHistory } from "react-router-dom";
import ContactsList from "./ContactsList";
import AddContactForm from "./AddContactForm";
import Contact from "./Contact";
import contactsAPI from "../contacts.json"

//create importedContacts variable and defining it with contacts from contactsAPI
const importedContacts = contactsAPI.contacts;

//main function component which returns and displays a contact button and depending on path, ContactsList (/), AddContactForm (/AddContactForm), 
//and Contact (/contact/:id)
const Main = () => {
  const [contacts, setContacts] = useState([...importedContacts])

  const history = useHistory();

  //function used as prop in 
  const addContact = (contact) => {
    setContacts(contacts=> {
      return [...contacts, contact]
    })
  }

  return (
    <main>
      <button onClick={() => history.push("/AddContactForm")} className="btn btn-primary">Add New Contact</button>
      
      <Switch>
        <Route exact path="/" render={() => (
            <ContactsList contacts={contacts}/>
          )}
        />
        <Route path="/AddContactForm" render={(routerProps)=> (
          <AddContactForm 
            history={routerProps.history} 
            contacts={contacts} 
            addContact={addContact}/>
          )}
        />
        <Route path="/contact/:id" render={(routerProps) => (
           <Contact 
            contactID={parseInt(routerProps.match.params.id,10)} 
            contacts={contacts}/>
          )}
        />
      </Switch>
    </main>
  );
}

export default Main;