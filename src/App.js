import React from 'react';
import Routes from './components/Routes';
import { initialContacts, ContactsContext } from './contacts-context';

import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.findContact = id => {
      return this.state.contacts.find(contact => contact.id === parseInt(id, 10));
    }

    this.addContact = contact => {
      this.setState(prevContacts => ({contacts: [...prevContacts, contact]}));
    }

    this.state = {
      contacts: initialContacts,
      findContact: this.findContact,
      addContact: this.addContact
    }

  }

  render() {
    return (
      <div className="App">
        <ContactsContext.Provider value={this.state} >
          <Routes />
        </ContactsContext.Provider>
      </div>
    );
  }
  
}

export default App;
