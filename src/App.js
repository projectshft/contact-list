import { Switch, Route } from 'react-router-dom';
import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactList from './ContactList';

const App = () => {
  //Store Contacts in State here? Use useState
  const [contacts, setContacts] = useState([
    {pic_url:'https://i.inews.co.uk/content/uploads/2021/05/SEI_80212847-640x360.jpg', name: "Jurgen Klopp", email: "kloppo@liverpoolfc.co.uk", phone: '0002345678'},
    {pic_url: 'https://static.independent.co.uk/2021/03/12/11/newFile-2.jpg?width=990&auto=webp&quality=75', name: "Mo Salah", email: "msalah@liverpoolfc.co.uk", phone:"0000001239"}
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
        <Route exact path="/" render={() => (
          <ContactList addContact={addContact} contacts={contacts}/>
        )}/>
      </Switch>
    </div>
  );
}

export default App;
