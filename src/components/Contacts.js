import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import FullContacts from './FullContacts';
import NewContact from './NewContact';
import ShowContact from './ShowContact';

const Contacts = ({ contacts, addContact }) => (
  <Switch>
    <Route
      path="/contacts/new"
      render={(renderProps) => (
        <NewContact
          contacts={contacts}
          addContact={addContact}
          history={renderProps.history}
        />
      )}
    />
    <Route
      path="/contacts/:number"
      render={(renderProps) => (
        <ShowContact
          contactId={parseInt(renderProps.match.params.number)}
          contacts={contacts}
        />
      )}
    />
    <Route
      path="/contacts"
      render={() => <FullContacts contacts={contacts} />}
    />
  </Switch>
);

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phoneNumber: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,

  addContact: PropTypes.func.isRequired,
};

export default Contacts;
