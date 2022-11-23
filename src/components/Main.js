import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Clicked from "./ClickedContact";
import AddContact from "./AddContact";

const Main = ({ addContact, contacts }) => {
  return (
    <>
      <Switch>
        <Route exact path="/" render={() => <Home contacts={contacts} />} />
        <Route
          path="/contact/:id"
          render={() => <Clicked contacts={contacts} />}
        />
        <Route
          path="/add-contact"
          render={() => <AddContact addContact={addContact} />}
        />
      </Switch>
    </>
  );
};

export default Main;
