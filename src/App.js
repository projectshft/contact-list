//  App.js is just below index.js in the hierarchy of components.  AddContact.js, contact.js, and contactList.js are child components of App.js
import logo from './logo.svg';
import './App.css';
import React, { Component, useState } from 'react';
//  import each component from the components folder
import AddContact from './components/addContact';
import ContactList from './components/contactList';
import Contact from './components/contact';
import {BrowserRouter, Route, Switch} from "react-router-dom";


function App() {
  //  declare a new state variable, which will be called "contacts".  useState has an empty array to hold the contacts
  const [contacts, setContacts] = useState([]);
  console.log(contacts);
  return (
        <BrowserRouter>
    		<Switch>
    			<Route exact path="/" render={() => (<ContactList contacts={contacts} />)} />
    			<Route exact path="/new" render={() => (<AddContact setContacts={setContacts} contacts={contacts}/>)} />
				<Route exact path="/contacts/:id" render={(props) => (<Contact contacts={contacts} {...props} />)} />
            </Switch>
        </BrowserRouter>
  )   
}

// App.js is a React component. Export this data to index.js
export default App;

{/* text is a prop, props are key value pairs, props show up in the component as a props object */}

// Begin at the /contacts view (will be empty at first) but will have an Add Contact button
// Clicking Add Contact button will take you to a new route, which is /contacts/new
//  Clicking "submit" will route you back to the /contacts "view" where you'll see all the contacts
//  From the /contacts route, each contact should be clickable.  You need to generate a unique id for each contact. Clicking the contact will navigate you to /contacts/{id of your contact}
//  Add a "Back button to take the user back to the /contacts view and main contact list"
//  Must use Proptypes