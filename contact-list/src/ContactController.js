import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import ContactCard from './ContactCard';
import ContactList from './ContactList';
import NewContact from './NewContact';
import './index.css';

const ContactController = ({ contacts, addContact }) => (
  <Switch>
    <Route
      path="/contacts/new"
      render={() => <NewContact addContact={addContact} />}
    />
    <Route
      path="/contacts/:id"
      render={(contactProps) => (
        <ContactCard
          contactId={parseInt(contactProps.match.params.number, 10)}
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

ContactController.propTypes = {
  addContact: PropTypes.func.isRequired,
};

ContactController.propTypes = {
  contacts: PropTypes.array.isRequired,
};

export default ContactController;
