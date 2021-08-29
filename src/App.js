import React from "react";
import { Route } from "react-router-dom";

import AddPost from "./components/AddContact";
import EditContact from "./components/EditContact";
import Contacts from "./components/Contacts";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className="app-container">
      <div classname="title">
        <h2><strong>Contact List</strong></h2>
      </div>
      <Route exact path="/" component={() => <Contacts />} />
      <Route exact path="/add" component={() => <AddPost />} />
      <Route exact path="/edit/:id" component={() => <EditContact />} />
    </div>
  );
};
export default App;



