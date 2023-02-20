import { Switch, Route } from "react-router-dom";
import PropTypes from "prop-types";
import ContactNew from "./ContactNew";
import Profile from "./Profile";
import ContactList from "./ContactList";

const Contacts = ({ contacts, addContact }) => {
  return (
    <Switch>
      <Route
        path="/contacts/new"
        render={(routerProps) => (
          <ContactNew
            history={routerProps.history}
            contacts={contacts}
            addContact={addContact}
          />
        )}
      />

      <Route
        path="/contacts/:id"
        render={(routerProps) => (
          <Profile
            contactId={parseInt(routerProps.match.params.id, 10)}
            contacts={contacts}
          />
        )}
      />

      <Route
        path="/contacts"
        render={() => <ContactList contacts={contacts} />}
      />
    </Switch>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  addContact: PropTypes.func.isRequired,
};

export default Contacts;
