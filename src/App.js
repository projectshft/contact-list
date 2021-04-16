import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useState } from 'react';
import Home from './components/Home';
import IndividualContact from './components/IndividualContact';
import NewContact from './components/NewContact';
import EditContact from './components/EditContact';

const Header = () => (
  <div className="row">
    <div className="col-md-12 text-center">
      <h1>Your Contact List</h1>
    </div>
  </div>
);

function App() {
  const [contacts, setContacts] = useState([
    {
      id: 70219577,
      name: 'Albert Einstein',
      image_url:
        'https://en.wikipedia.org/wiki/Albert_Einstein#/media/File:Einstein_1921_by_F_Schmutzer_-_restoration.jpg',
      email: 'aeinstein@example.com',
      phone_number: '15555555555',
    },
    {
      id: 2,
      name: 'Albert Einstein',
      image_url:
        'https://en.wikipedia.org/wiki/Albert_Einstein#/media/File:Einstein_1921_by_F_Schmutzer_-_restoration.jpg',
      email: 'aeinstein@example.com',
      phone_number: '15555555555',
    },
  ]);

  const addContact = (newContact) => {
    setContacts(contacts.concat([newContact]));
  };

  const editContact = (newContactInfo) => {
    setContacts((prevState) =>
      [...prevState].map((c) =>
        c.id === newContactInfo.id ? newContactInfo : c
      )
    );
  };

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
}

export default App;
