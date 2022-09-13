/* eslint-disable react/prop-types */
import { Switch, Route } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import { ContactType } from '../types';
import Contact from './Contact';
import NewContact from './NewContact';

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
  </Switch>
);

// Contacts.propTypes = {
//   contacts: PropTypes.array(ContactType).isRequired,
//   addContact: PropTypes.func.isRequired,
// };

// PropTypes.checkPropTypes(ContactType)

export default Contacts;
