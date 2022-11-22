import logo from "./logo.svg";
import "./App.css";

import ContactNew from "./Components/ContactNew";
import React, { useState } from "react";
import ContactList from "./Components/ContactList";
import Contacts from "./Components/Contacts";

import {
  Switch,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import ContactCard from "./Components/ContactCard";

// Main page, ContactList component will be the Home page.
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/addcontact">
            <ContactNew />
          </Route>
          <Route path="/contactcard">
            <ContactCard />
          </Route>
          <Route path="/">
            <ContactList />
            {/* <ContactCard /> */}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
