import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import ContactList from './ContactList';
import NewContact from './NewContact';
import ContactController from './ContactController';

const generateId = () => Math.round(Math.random() * 100000000);

const Main = () => {
  const [contacts, setContacts] = useState([
    {
      id: generateId(),
      fullName: 'Albert Einstein',
      imgUrl:
        'https://pbs.twimg.com/profile_images/879355674957926400/VSGZHGib_400x400.jpg',
      email: 'aeinstein@example.com',
      phoneNumber: '5555555555',
    },
    {
      id: generateId(),
      fullName: 'Elon Musk',
      imgUrl:
        'https://i.insider.com/6038b0ec05ddb100195f656f?width=700&format=jpeg&auto=webp',
      email: 'emusk@tesla.com',
      phoneNumber: '5555555555',
    },
  ]);

  const addContact = (newContact) =>
    setContacts((previousContacts) => [...previousContacts, newContact]);

  return (
    <div>
      <h1>Contact List</h1>
      <main>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <ContactList contacts={contacts} />}
          />
          <Route
            path="/new"
            render={() => <NewContact addContact={addContact} />}
          />
          <Route
            path="/contacts"
            render={() => <ContactController contacts={contacts} />}
          />
        </Switch>
      </main>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
