import { Switch, Route } from 'react-router-dom';
import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactNew from './ContactNew';
import AllContacts from "./AllContacts";
import Contact from './Contact';
import ContactsRouter from './ContactsRouter';

const App = () => {
  //Store Contacts in State here? Use useState
  const [contacts, setContacts] = useState([
    {pic_url:'https://i.inews.co.uk/content/uploads/2021/05/SEI_80212847-640x360.jpg', name: "Jurgen Klopp", email: "kloppo@liverpoolfc.co.uk", phone: '0002345678', contactId: '0'},
    {pic_url: 'https://static.independent.co.uk/2021/03/12/11/newFile-2.jpg?width=990&auto=webp&quality=75', name: "Mo Salah", email: "msalah@liverpoolfc.co.uk", phone:"0000001239", contactId: '1'},
    {pic_url: 'https://i.inews.co.uk/content/uploads/2021/05/SEI_78559302-640x360.jpg', name: "Virgil van Dijk", email: "bigvirg@liverpoolfc.co.uk", phone:"0000234239", contactId:'2'}
  ])
  //add contact function
  const addContact = (contact) => {
    setContacts(contacts => {
      return [...contacts, contact]
    });
  }
  return (
    <div>
      <Switch>
       {/* <Route path='/' component={Home}></Route> */}

        <Route path='/contacts' render={(routerProps) => (
          <ContactsRouter contacts={contacts} addContact={addContact}/>
        )} />
      </Switch>
    </div>
  );
}

export default App;
