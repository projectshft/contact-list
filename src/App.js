import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import { useState } from "react";
import Home from "./components/Homepage";
import IndividualContact from "./components/IndividualContact";
import NewContact from "./components/NewContact";
import Header from "./components/Heading";

const App = () => {
  const [contacts, setContacts] = useState([]);

  const addContact = (newContact) => {
    setContacts(contacts.concat([newContact]));
  };

  return (
    <div className="App container">
      <Header />
      <Switch>
        <Route
          exact
          path="/contacts"
          render={() => <Home contacts={contacts} />}
        />
        <Route
          path="/contacts/new"
          render={() => <NewContact addContact={addContact} />}
        />
        <Route
          exact
          path="/contacts/:id"
          render={({ match }) => (
            <IndividualContact contacts={contacts} match={match} />
          )}
        />
        <Redirect to="/contacts" />
      </Switch>
    </div>
  );
};

export default App;
