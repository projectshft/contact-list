import { Switch, Route } from "react-router-dom";
import PropTypes from "prop-types";
import Contact from "./Contact";
import ContactNew from "./ContactNew";
import ContactList from "./ContactList";
import ContactEdit from "./ContactEdit";

const Home = ({ contacts, addContact, confirmDeleteContact, editContact }) => (
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
      exact
      path="/contacts/:id"
      render={(routerProps) => (
        <Contact contactId={routerProps.match.params.id} contacts={contacts} />
      )}
    />
    <Route
      path="/contacts/:id/edit"
      render={(routerProps) => (
        <ContactEdit
          history={routerProps.history}
          contactId={routerProps.match.params.id}
          contacts={contacts}
          editContact={editContact}
        />
      )}
    />
    <Route
      exact
      path="/contacts"
      render={() => (
        <ContactList
          contacts={contacts}
          confirmDeleteContact={confirmDeleteContact}
        />
      )}
    />
  </Switch>
);

Home.propTypes = {
  contacts: PropTypes.array,
  addContact: PropTypes.func,
};

export default Home;
