import React from "react";
import { Switch, Route } from "react-router-dom";
import TableBuilder from "./TableBuilder.js";
import SingleContact from "./SingleContact.js";


export default function DisplayContact() {
  return (
    <Switch>
    <Route exact path="/display-contact" component={TableBuilder} />
    <Route path="/display-contact/:id" component={SingleContact} />
  </Switch>
  );
}


