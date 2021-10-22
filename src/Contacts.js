import { Switch, Route } from 'react-router-dom';
import ContactsList from './ContactsList';
import NewContact from './NewContact';

const Contacts = ({ contacts, addContact }) => (
  <Switch>
    <Route
      path="/contacts"
      render={() => <ContactsList contacts={contacts} />}
    />

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
  </Switch>
);

export default Contacts;
