import React from "react";
import { Route, Switch } from "react-router-dom";
import DisplayContact from "./DisplayContact.js";

export default function DisplaySwitch() {
  return (
    <Switch>
      <Route exact path="/display-contact" component={DisplaySwitch} />
      <Route path="/display-contact/:id" component={DisplayContact} />
    </Switch>
  )
} 