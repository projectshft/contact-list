import { Switch, Route } from "react-router-dom";
import React, { useState } from "react";
import Home from "./Home";

const App = () => {
  const [contacts, setContact] = useState([
    {
      id: 193746284,
      name: "Lauren Nicholls",
      image_url:
        "https://12ax7web.s3.amazonaws.com/accounts/1/products/1986199880919/Stay-Weird-Stitch_800x800_SEPS-1000x1000.jpg",
      email: "lauren.nicholls1@gmail.com",
      phone_number: "5555555555",
    },
    {
      id: 138746736,
      name: "Bryan Nicholls",
      image_url:
        "https://i.natgeofe.com/k/a9236635-6a24-466f-81d8-dc4f36d5053a/chipmunk-cheeks.jpg",
      email: "bryan@gmail.com",
      phone_number: "5555555555",
    },
  ]);

  const addContact = (contact) => {
    setContact((contacts) => {
      return [...contacts, contact];
    });
  };

  return (
    <div>
      <h1>Contact List</h1>
      <Switch>
        <Route
          path="/contacts"
          render={() => <Home addContact={addContact} contacts={contacts} />}
        />
      </Switch>
    </div>
  );
};

export default App;
