import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Contacts from './components/Contacts';
import Home from './components/Home';
import './App.css';

function App() {
  const [contacts, setContacts] = useState([
    {
      id: 70219577,
      name: 'Albert Einstein',
      imageUrl:
        'https://blog.playstation.com/tachyon/2022/06/0c3c20a8d8514501524a0859461f391572ea6e61.jpg?resize=1088%2C612&crop_strategy=smart',
      email: 'aeinstein@example.com',
      phoneNumber: '12355555555',
    },
  ]);

  const addContact = (contact) => {
    setContacts(() => [...contacts, contact]);
  };

  return (
    <div>
      <h1 className="header">Contact List</h1>
      <img src="" alt="" />
      <Switch>
        <Route exact path="/" render={() => <Home contacts={contacts} />} />
        <Route
          path="/contacts"
          render={() => (
            <Contacts contacts={contacts} addContact={addContact} />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
