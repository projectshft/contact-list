/* eslint-disable react/prop-types */
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ContactType } from '../types';
import Contact from './Contact';
import AddUpdateContact from './AddUpdateContact';

const Contacts = ({ contacts, addUpdateContact }) => (
  <Switch>
    <Route
      path="/contacts/new"
      render={(routerProps) => (
        <AddUpdateContact
          history={routerProps.history}
          addUpdateContactt={addUpdateContact}
        />
      )}
    />
    <Route
      path="/contacts/edit/:id"
      render={(routerProps) => (
        <AddUpdateContact
          history={routerProps.history}
          addUpdateContact={addUpdateContact}
          selected={
            contacts.find(
              (contact) => contact.id.toString() === routerProps.match.params.id
            ) || {}
          }
        />
      )}
    />
    <Route
      path="/contacts/:id"
      render={(routerProps) => (
        <Contact
          contactId={parseInt(routerProps.match.params.id, 10)}
          contacts={contacts}
        />
      )}
    />
  </Switch>
);

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(ContactType).isRequired,
  addUpdateContact: PropTypes.func.isRequired,
};


export default Contacts;
