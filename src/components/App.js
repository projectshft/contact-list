import { Route, Switch } from 'react-router-dom';

import PropTypes from 'prop-types';

import { useState } from 'react';

import Contacts from './Contacts';

import SingleContact from './SingleContact';

import ContactForm from './ContactForm';

import EditContact from './EditContact';

import DeleteContact from './DeleteContact';

import Header from './Header';

import 'bootstrap/dist/css/bootstrap.min.css';

import findContactById from './findContactById';

const data = require('../data/contacts.json');

function App() {
  const [contacts, setContacts] = useState(data.contacts);

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Contacts contacts={contacts} addContact={addContact} />
        </Route>
        <Route path="/contacts/new">
          <ContactForm contacts={contacts} setContacts={setContacts} />
        </Route>
        <Route
          path="/contacts/:id/edit"
          render={(props) => (
            <EditContact
              id={parseInt(props.match.params.id)}
              contacts={contacts}
            />
          )}
        />
        <Route
          path="/contacts/:id/delete"
          render={(props) => (
            <DeleteContact
              id={parseInt(props.match.params.id)}
              contacts={contacts}
              setContacts={setContacts}
            />
          )}
        />
        <Route
          path="/contacts/:id"
          render={(props) => (
            <SingleContact
              id={parseInt(props.match.params.id)}
              contact={findContactById(contacts, props.match.params.id)}
              setContacts={setContacts}
            />
          )}
        />
      </Switch>
    </div>
  );
}

App.propTypes = {
  match: PropTypes.func,
};

export default App;
