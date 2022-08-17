import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Contacts from "./components/Contacts";
import Home from "./components/Home";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState([
    {
      id: 70219577,
      name: "Albert Einstein",
      imageUrl:
        "https://images.newscientist.com/wp-content/uploads/2019/06/18142824/einstein.jpg",
      email: "aeinstein@example.com",
      phoneNumber: "15555555555",
    },
  ]);

  const addContact = (contact) => {
    setContacts((contacts) => {
      return [...contacts, contact];
    });
  };

  return (
    <div>
      <h1 className="header">Contact List</h1>
      <img src="" alt="" />
      <Switch>
        <Route exact path="/" render={() => <Home contacts={contacts} />} />
        <Route
          path="/contacts"
          render={() => (
            <Contacts contacts={contacts} addContact={addContact} />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
