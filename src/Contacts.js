import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Contact from './Contact';
import NewContact from './NewContact';
import YourContacts from './YourContacts';

const Contacts = ({ contacts, addContact }) => (
  <Switch>
    <Route
      path="/contacts/new"
      render={(routerProps) => (
        <NewContact
          history={routerProps.history}
          contacts={contacts}
          addContact={addContact}
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

    <Route
      path="/contacts"
      render={(routerProps) => (
        <YourContacts contacts={contacts} history={routerProps.history} />
      )}
    />
  </Switch>
);

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      pictureUrl: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ),
  addContact: PropTypes.func,
};

export default Contacts;
