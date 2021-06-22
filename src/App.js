import './App.css';
import AddContact from './AddContact.js'
import Contact from './Contact.js'
import ContactList from './ContactList.js'
import React, { useState }  from 'react';
import { Switch, Route } from "react-router-dom";

export default function App() {
  const [contacts, setContacts] = useState([
    {
      id: parseInt(Math.round(Math.random() * 100000000),8), // or use uuid
      name: "Adam Conley",
      image_url:
        "https://img.mlbstatic.com/mlb-photos/image/upload/w_60,d_headshot_silo_generic.png,ar_1:1,c_pad,b_auto:border,q_auto:best/v1/people/543045/headshot/milb/current",
      email: "aconley@dbulls.com",
      phone_number: "15555555557",
    },
    {
      id: parseInt(Math.round(Math.random() * 100000000), 8),
      name: "Adrian De Horta",
      image_url:
        "https://img.mlbstatic.com/mlb-photos/image/upload/w_60,ar_1:1,c_pad,b_auto:border,q_auto:best/v1/people/641506/headshot/83/t234/current",
      email: "adehorta@dbuls.com",
      phone_number: "15555555555",
    }
  ])
      
  const addContact = (contact) => {
    setContacts(contacts => {
      return [...contacts, contact]
    });
  }

  return (
    <div className="App">
      <div className="row">
        <header className="App-header">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1>Contact List</h1>
          </div>
        </header>
      </div>

      <Switch>
        <Route
          path="/contacts/new"
          render={(routerProps) => (
            <AddContact
              history={routerProps.history}
              contacts={contacts}
              addContact={addContact}
            />
          )}
        />

        <Route
          path="/contacts/:name"
          render={(routerProps) => (
            <Contact
              contactId={parseInt(routerProps.match.params.id, 8)}
              contacts={contacts}
            />
          )}
        />

        <Route
          exact
          path="/contacts"
          render={() => <ContactList contacts={contacts} />}
        />
      </Switch>
    </div>
  );}

