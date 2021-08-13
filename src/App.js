import './App.css';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import AddForm from './components/add_form';
import ContactList from './components/contact_list';
import Contact from './components/contact';

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

  return (
    <div className="App container">
      <Switch>
        <Route
          exact
          path="/"
          render={() => <ContactList contacts={contacts} />}
        />
        <Route
          path="/contacts/new"
          render={(props) => (
            // eslint-disable-next-line react/jsx-no-bind
            <AddForm history={props.history} addContact={addContact} />
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
    </div>
  );
}

App.propTypes = {
  history: PropTypes.object,
};

export default App;
