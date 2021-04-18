import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import ContactDetail from './components/ContactDetail';
import ContactEdit from './components/ContactEdit';

class App extends Component {
  constructor() {
    super();

    this.state = {
      contacts: [
        {
          avatarURL:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg/1920px-Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg',
          fullname: 'Steve Jobs',
          email: 'steve@mac.com',
          phone: 2222222222,
          id: 12345,
        },
        {
          avatarURL:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Thomas_Edison2.jpg/1280px-Thomas_Edison2.jpg',
          fullname: 'Thomas Edison',
          email: 'lightbulb@test.com',
          phone: 7777777777,
          id: 6789,
        },
      ],
    };

    this.addContact = this.addContact.bind(this);
    this.deleteContact = this.deleteContact.bind(this);
    this.editContact = this.editContact.bind(this);
  }

  addContact(newContact) {
    const { contacts } = this.state;
    this.setState({ contacts: contacts.concat([newContact]) });
  }

  /* returns all contacts which do not match the deleted contacts id and updates state to exclude the deleted contact */
  deleteContact(id) {
    const { contacts } = this.state;
    const allOtherContacts = contacts.filter(function (contact) {
      return contact.id !== parseInt(id, 10);
    });
    this.setState({ contacts: allOtherContacts });
  }

  /*   returns all contacts which do not match the edited contacts id
  adds the  edited contact to the list of otherContacts and updates state, */
  editContact(editedContact) {
    const { contacts } = this.state;
    const otherContacts = contacts.filter(function (contact) {
      return contact.id !== parseInt(editedContact.id, 10);
    });

    const updatedContactList = otherContacts.concat(editedContact);
    this.setState({ contacts: updatedContactList });
  }

  render() {
    const { contacts } = this.state;
    return (
      <div>
        <Router>
          <div className="row justify-content-md-center">
            <div className="col-md-8 self-align-center">
              <div className="h1 text-center">Contact List</div>
              <div>
                <Switch>
                  <Route exact path="/">
                    <Redirect to="/contacts" />
                  </Route>
                  <Route exact path="/contacts">
                    <ContactList contacts={contacts} />
                  </Route>
                  <Route exact path="/new">
                    <ContactForm
                      contacts={contacts}
                      addContact={this.addContact}
                    />
                  </Route>
                  <Route exact path="/contacts/:id">
                    <ContactDetail
                      contacts={contacts}
                      deleteContact={this.deleteContact}
                    />
                  </Route>
                  <Route exact path="/contacts/:id/edit">
                    <ContactEdit
                      contacts={contacts}
                      editContact={this.editContact}
                    />
                  </Route>
                </Switch>
              </div>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
