import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useState } from 'react';
import Home from './components/Home';
import IndividualContact from './components/IndividualContact';
import NewContact from './components/NewContact';
import EditContact from './components/EditContact';
import Header from './components/Header';

const App = () => {
  const [contacts, setContacts] = useState([]);

  // Sample Contacts:
  // [
  //   {
  //     id: 70219577,
  //     name: 'Albert Einstein',
  //     image_url: 'https://www.atomicarchive.com/img/bios/einstein.jpg',
  //     email: 'aeinstein@example.com',
  //     phone_number: '15555555555',
  //   },
  //   {
  //     id: 2,
  //     name: 'Albert Einstein',
  //     image_url:
  //       'https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fblogs-images.forbes.com%2Frainerzitelmann%2Ffiles%2F2019%2F06%2FE0MG76-e1560965378507-1200x1270.jpg',
  //     email: 'aeinstein@example.com',
  //     phone_number: '15555555555',
  //   },
  // ]

  // Adds a new contact to contacts array
  const addContact = (newContact) => {
    setContacts(contacts.concat([newContact]));
  };

  // Updates contacts array with edited contact
  const editContact = (newContactInfo) => {
    setContacts((prevState) =>
      [...prevState].map((c) =>
        c.id === newContactInfo.id ? newContactInfo : c
      )
    );
  };

  // Removes contact with given id from contacts array
  const deleteContact = (id) => {
    setContacts((prevState) =>
      [...prevState].filter((c) => c.id !== parseInt(id))
    );
  };

  return (
    <div className="App container">
      <Header />
      <Switch>
        <Route
          exact
          path="/contacts"
          render={() => (
            <Home contacts={contacts} deleteContact={deleteContact} />
          )}
        />
        <Route
          path="/contacts/new"
          render={() => <NewContact addContact={addContact} />}
        />
        <Route
          exact
          path="/contacts/:id"
          render={({ match }) => (
            <IndividualContact contacts={contacts} match={match} />
          )}
        />
        <Route
          path="/contacts/:id/edit"
          render={({ match }) => (
            <EditContact
              contacts={contacts}
              match={match}
              editContact={editContact}
            />
          )}
        />
        <Redirect to="/contacts" />
      </Switch>
    </div>
  );
};

export default App;
