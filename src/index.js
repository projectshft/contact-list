import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ContactList from './ContactList';
import ContactInfo from './ContactInfo';
import NewContact from './NewContact';

const generateId = () => Math.round(Math.random() * 100000000);

const Main = () => {
  const [contacts, setContacts] = useState([
    {
      id: generateId(),
      name: 'Din Djarin',
      imageUrl:
        'https://www.rollingstone.com/wp-content/uploads/2020/12/mandalorian-the-tragedyc.jpg',
      email: 'mando@starwars.com',
      phoneNumber: '15555555555',
    },
    {
      id: generateId(),
      name: 'Boba Fett',
      imageUrl:
        'https://lumiere-a.akamaihd.net/v1/images/boba-fett-main_a8fade4d.jpeg?region=205%2C34%2C1064%2C598&width=960',
      email: 'boba@starwars.com',
      phoneNumber: '15555555556',
    },
  ]);

  const addContact = (newContact) => {
    setContacts((existingContacts) => [...existingContacts, newContact]);
  };

  const deleteContact = (id) => {
    const newContacts = contacts.filter((item) => item.id !== id);
    setContacts(newContacts);
  };

  return (
    <main>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <ContactList deleteContact={deleteContact} contacts={contacts} />
          )}
        />
        <Route
          path="/new"
          render={() => <NewContact addContact={addContact} />}
        />
        <Route
          path="/contacts/:id"
          render={(contactProps) => (
            <ContactInfo
              contact={contacts.find(
                (contact) =>
                  contact.id === parseInt(contactProps.match.params.id, 10)
              )}
            />
          )}
        />
      </Switch>
    </main>
  );
};

const App = () => (
  <div>
    <Main />
  </div>
);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
