import { Switch, Route } from "react-router-dom";
import Contact from "./Contact";
import ContactNew from "./ContactNew";
import ContactList from "./ContactList";

const Home = ({ contacts, addContact }) => (
  <Switch>
    <Route
      path="/contacts/new"
      render={(routerProps) => (
        <ContactNew
          history={routerProps.history}
          contact={contacts}
          addContact={addContact}
        />
      )}
    />
    <Route
      path="/contacts/:id"
      render={(routerProps) => (
        <Contact
          contactId={parseInt(routerProps.match.params.id)}
          contacts={contacts}
        />
      )}
    />
    <Route
      exact
      path="/contacts"
      render={() => <ContactList contacts={contacts} />}
    />
  </Switch>
);

export default Home;
