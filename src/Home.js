import { Switch, Route } from "react-router-dom";
import PropTypes from "prop-types";
import Contact from "./Contact";
import ContactNew from "./ContactNew";
import ContactList from "./ContactList";

const Home = ({ contacts, addContact, deleteContact }) => (
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
        <Contact contactId={routerProps.match.params.id} contacts={contacts} />
      )}
    />
    <Route
      exact
      path="/contacts"
      render={() => (
        <ContactList contacts={contacts} deleteContact={deleteContact} />
      )}
    />
  </Switch>
);

Home.propTypes = {
  contacts: PropTypes.array,
  addContact: PropTypes.func,
};

export default Home;
