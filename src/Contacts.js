import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import ContactList from './ContactList';
import ContactForm from './ContactForm';
import Contact from './Contact';

const Contacts = ({ contacts, addContact, deleteContact }) => (
  <Switch>
    <Route
      exact
      path="/contacts/new"
      render={(routerProps) => (
        <ContactForm
          history={routerProps.history}
          contacts={contacts}
          addContact={addContact}
        />
      )}
    />

    <Route
      path="/contacts/:id"
      render={(props) => <Contact props={props} contacts={contacts} />}
    />

    <Route
      path="/contacts"
      render={(routerProps) => (
        <ContactList
          contacts={contacts}
          deleteContact={deleteContact}
          history={routerProps.history}
        />
      )}
    />
  </Switch>
);

export default Contacts;

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  addContact: PropTypes.func.isRequired,
  deleteContact: PropTypes.func,
};
