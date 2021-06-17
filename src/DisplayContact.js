import React from "react";
import { Switch, Route } from "react-router-dom";
import TableBuilder from "./TableBuilder.js";
import Person from "./Person.js"
import PersonNew from "./PersonNew.js"

export default function DisplayContact({people, addPerson}) {
  return (
    <Switch>
      <Route
        path="/add-contact"
        render={(routerProps) => (
          <PersonNew
            histor={routerProps.history}
            people={people}
            addPerson={addPerson}
          />
        )}
      />

      <Route path="/display-contact/:id" render={(routerProps) => (
        <Person PersonId={parseInt(routerProps.match.params.id, 8)} people={people} />
      )} />

      <Route path="/display-contact" render={() => (
        <TableBuilder people={people} />
      )} />
    </Switch>
  );
}


