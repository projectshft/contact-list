import './App.css';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import _ from 'lodash';
import AddForm from './components/add_form';
import ContactList from './components/contact_list';
import Contact from './components/contact';
import EditForm from './components/edit_contact';

function App() {
  const [contacts, setContacts] = useState([
    {
      id: 70219577,
      name: 'Albert Einstein',
      avatar:
        'https://pbs.twimg.com/profile_images/879355674957926400/VSGZHGib_400x400.jpg',
      email: 'aeinstein@example.com',
      number: '15555555555',
    },
  ]);

  const addContact = (contact) => {
    setContacts(contacts.concat(contact));
  };

  const editContact = (contact) => {
    setContacts((contactsArr) => {
      [...contactsArr].map((person) =>
        person.id === contact.id ? contact : person
      );
    });
  };

  const deleteContact = (id) => {
    const updatedContacts = _.remove(
      [...contacts],
      (contact) => !(contact.id === id)
    );
    setContacts(updatedContacts);
  };

  return (
    <div className="App container">
      <h1>Contacts!</h1>
      <Switch>
        <Route
          path="/contacts/new"
          render={(props) => (
            <AddForm history={props.history} addContact={addContact} />
          )}
        />
        <Route
          path="/contacts/:id/edit"
          render={(routerProps) => (
            <EditForm
              contactId={parseInt(routerProps.match.params.id, 10)}
              contacts={contacts}
              editContact={editContact}
              history={routerProps.history}
            />
          )}
        />
        <Route
          path="/contacts/:id"
          render={(routerProps) => (
            <Contact
              contactId={parseInt(routerProps.match.params.id, 10)}
              contacts={contacts}
              deleteContact={deleteContact}
            />
          )}
        />
        <Route
          exact
          path="/"
          render={() => <ContactList contacts={contacts} />}
        />
      </Switch>
    </div>
  );
}

App.propTypes = {
  history: PropTypes.object,
};

export default App;
