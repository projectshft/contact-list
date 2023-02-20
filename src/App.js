import { Switch, Route } from "react-router-dom";
import React, { useState } from "react";
import Contacts from "./Contacts";
import ContactList from "./ContactList";

function App() {
  const [contacts, setContacts] = useState([]);

  const addContact = (contact) => {
    setContacts((contacts) => {
      return [...contacts, contact];
    });
  };

  return (
    <div>
      <Switch>
        <Route exact path="/" component={ContactList} />
        <Route
          path="/contacts"
          render={() => (
            <Contacts addContact={addContact} contacts={contacts} />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
