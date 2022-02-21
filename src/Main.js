import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import ContactList from './ContactList'
import ContactNew from './ContactNew'
import Contact from './Contact'
import _ from 'lodash'


const Main = () => {

  const [contacts, setContacts] = useState([
    { id: 1, name: "Stephanie Bistransin", email: "stephbis@gmail.com", phone: "972-854-1675", image_url: "https://i.insider.com/5ebef51f3ad8611e4a4e7085?width=700" }, 
    { id: 2, name: "Samuel Frederick", email: "sfred@gmail.com", phone: "972-742-6118", image_url: "https://c.stocksy.com/a/B2l400/z9/1134115.jpg" },
  ])

  const addContact = (contact) => {
    setContacts(contacts => {
      return [...contacts, contact]
    });
  }

  const removeContact = (id) => {
    setContacts(_.filter(contacts, c => c.id !== id))
  }

  return (
    <Routes>
      {/* <Route path="/" render={() => (
        <ContactList contacts={contacts} addContact={addContact} />
        )}/> */}
      {/* <Route exact path="/contacts/new" render={(routerProps) => (
        <ContactNew history={routerProps.history} contacts={contacts} addContact={addContact} />
        )}/> */}
      {/* <Route path='/contacts/:id' render={(routerProps) => (
        <Contact contactId={parseInt(routerProps.match.params.id, 10)} contacts={contacts}/>
      )} /> */}
      <Route path="/" element={<ContactList contacts={contacts} addContact={addContact} removeContact={removeContact} />}/>
      <Route path="/contacts/new" element={<ContactNew contacts={contacts} addContact={addContact} />}/>
        <Route path='/contacts/:id' element={<Contact contacts={contacts}/>} />
    </Routes>
  )


}

export default Main