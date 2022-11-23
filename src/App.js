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

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/addcontact">
            <ContactNew />
          </Route>
          <Route path="/">
            <ContactList />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
