import { Route, Switch } from 'react-router-dom';

import PropTypes from 'prop-types';

import { useState } from 'react';

import Contacts from './Contacts';

import SingleContact from './SingleContact';

import ContactForm from './ContactForm';

import Header from './Header';

import 'bootstrap/dist/css/bootstrap.min.css';

const data = require('../data/contacts.json');

function App() {
  const [contacts, setContacts] = useState(data.contacts);
  const [selectedContactId, setSelectedContactId] = useState(null);

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  const findContactById = (allContacts, id) => {
    const newData = allContacts.filter(
      (cont) => parseInt(cont.id) === parseInt(id)
    );
    return newData[0];
  };
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          {/* <Contacts contacts={contacts} setContacts={setContacts} /> */}
          <Contacts contacts={contacts} addContact={addContact} />
        </Route>
        {/* <Route path="/contacts">
          <Contacts contacts={contacts} />
        </Route> */}
        <Route path="/contacts/new">
          <ContactForm contacts={contacts} setContacts={setContacts} />
        </Route>
        <Route
          path="/contacts/:id"
          render={(props) => (
            <SingleContact
              id={parseInt(props.match.params.id)}
              contact={findContactById(contacts, props.match.params.id)}
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
