import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import ContactDetail from "./components/ContactDetail";
import ContactForm from "./components/ContactForm";
import "./App.css";

const App = () => {

  const generateID = () => Math.round(Math.random() * 100000000);
  
  const [contacts, setContacts] = useState([
    {
      imageURL: "https://i.imgflip.com/419day.png",
      name: "Joe Shocked",
      email: "shockedfish@gmail.com",
      phone: "1-800-shocked",
      contactID: generateID()
    },
    {
      imageURL: "https://i.pinimg.com/originals/12/6e/4b/126e4bf6fff76cdba62610e462eb0c4d.jpg",
      name: "Samantha Smiles",
      email: "mssmiles@aol.com",
      phone: "1-800-ms-smiles",
      contactID: generateID()
    },
  ]);

  const addContact = (contact) => {
    contact.contactID = generateID();
    setContacts([...contacts, contact]);
  };

  return (
    <div>
      <Switch>
        <Route
          exact
          path="/"
          render={() => <Home addContact={addContact} contacts={contacts} setContacts={setContacts} />}
        />

        <Route
          path="/ContactForm"
          render={(props) => (
            <ContactForm history={props.history} contacts={contacts} addContact={addContact} />
          )}
        />

        <Route
          path="/:contactID"
          render={(props) => (
            <ContactDetail
              contactID={props.match.params.contactID}
              contacts={contacts}
            />
          )}
        />

      </Switch>
    </div>
  );
};

export default App;
