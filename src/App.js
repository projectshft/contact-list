import { Component } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactsList';
import ContactsList from './ContactsList';

class App extends Component {
  constructor() {
    super()

    this.state = {
      contacts: []
    }
    this.addContact = this.addContact.bind(this);
  }

  addContact(contact) {
    this.setState({ contacts: this.state.contacts.concat([contact]) });
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="page-header">
            <h1>Contact List</h1>
          </div>

          <div className="contacts">
          </div>
          <ContactsList contacts={this.state.contacts} />
          <ContactForm addContact={this.addContact} />

        </div>
      </div>
    );
  }
}

export default App;