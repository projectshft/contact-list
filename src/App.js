import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Contacts from "./components/Contacts";
// import NewContact from "./components/NewContact";
import Home from "./components/Home";
import './App.css'

function App() {
  const [contacts, setContacts] = useState([
    {
      id: 70219577,
      name: "Albert Einstein",
      image_url:
        "https://en.wikipedia.org/wiki/Albert_Einstein#/media/File:Einstein_1921_by_F_Schmutzer_-_restoration.jpg",
      email: "aeinstein@example.com",
      phone_number: "15555555555",
    },
  ]);

  const addContact = (contact) => {
    setContacts((contacts) => {
      return [...contacts, contact];
    });
  };

  return (
    <div>
      <h1 className="header" >Contact List</h1>
      <img src={"https://en.wikipedia.org/wiki/Chow_Chow#/media/File:ChowChow2Szczecin.jpg"} alt=""/>
      <Switch>
        <Route exact path="/" render={() => <Home contacts={contacts} />} />
        {/* <Route path="/new" render={() => <NewContact contacts={contacts} addContact={addContact}/>} /> */}
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
