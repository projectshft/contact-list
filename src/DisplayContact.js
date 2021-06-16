import React from "react";
import { Switch, Route } from "react-router-dom";
import TableBuilder from "./TableBuilder.js";
import SingleContact from "./SingleContact.js";


export default function DisplayContact(props) {
  // gets ContactStateData whole just fine

  // bring data into component and then filter or find in the function here and then have that - mimic Player from the React baseball example
  return (
    <Switch>
    <Route exact path="/display-contact" component={TableBuilder} />
    <Route path="/display-contact/:name" component={SingleContact} />
  </Switch>
  );
}


