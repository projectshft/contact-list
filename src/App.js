//  App.js is just below index.js in the hierarchy of components.  AddContact.js, contact.js, and contactList.js are child components of App.js
import logo from './logo.svg';
import './App.css';
import React, { Component, useState } from 'react';
//  import each component below from the components folder
import AddContact from './components/addContact';
import ContactList from './components/contactList';
import Contact from './components/contact';
import {BrowserRouter, Route, Switch} from "react-router-dom";


function App() {
  //  declare a new state variable, which will be called "contacts".  useState has an empty array to hold the contacts.  This is called "array destructuring."  We're making two new variables, where contacts is set to the first value returned by useState, and setContacts is the second
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

