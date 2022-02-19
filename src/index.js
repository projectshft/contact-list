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
      name: 'Albert Einstein',
      imageUrl:
        'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTc5ODc5NjY5ODU0NjQzMzIy/gettyimages-3091504.jpg',
      email: 'aeinstein@example.com',
      phoneNumber: '15555555555',
    },
    {
      id: generateId(),
      name: 'Elon Musk',
      imageUrl:
        'https://i.insider.com/566eccdedd08952f058b4581?width=600&format=jpeg&auto=webp',
      email: 'emusk@mars.com',
      phoneNumber: '15555555556',
    },
  ]);

  const addContact = (newContact) => {
    setContacts((existingContacts) => [...existingContacts, newContact]);
  };

  return (
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
