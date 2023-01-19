import React, { Component } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';

class App extends Component {
    constructor () {
    super()

    this.state = {
      contacts: []
    }
    
    this.addContact = this.addContact.bind(this);
  }
  
  addContact (contact) {
    this.setState({contacts: this.state.contacts.concat([contact])});
  }
  
  render() {
    return (
      <div className="container align-items-center">
        <h1 className="text-center">Contact List</h1> 
        <br/>
        <br/>
        <ContactForm addContact={this.addContact} />
        <br/>
        <div className="container text-center">
          <div className="row fs-5 fw-bold">
            <div className="col border">Profile Picture</div>
            <div className="col border">Name</div>
            <div className="col border">Email</div>
            <div className="col border">Phone Number</div>
          </div>
        </div>
        <ContactList contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
            