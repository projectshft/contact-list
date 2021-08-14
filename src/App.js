import logo from './logo.svg';
import './App.css';
import React, { Component, useState } from 'react';
import AddContact from './components/addContact';
import ContactList from './components/contactList';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Button from './components/button';



const Main = () => (
  <Switch>
    
    {/* <Route exact path="/" component={Contacts} /> */}
    {/* //  need to change component below */}
    {/* <Route path="/compiledContacts" component={} />
     */}
  </Switch>
)

function App() {
  const [contacts, setContacts] = useState([]);
  console.log(contacts);
  return (
        <BrowserRouter>
        {/* text is a prop, props are key value pairs, props show up in the component as a props object */}
        <Button text="blue" />
        <Button text="red" />
        <Button text="yellow" />
        <Main />
        <AddContact setContacts={setContacts} contacts={contacts}/>
        <ContactList contacts={contacts}/>
        </BrowserRouter>
        
  )   
}

export default App;
