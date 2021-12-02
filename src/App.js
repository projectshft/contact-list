import React, { Component } from 'react';
import ContactForm from './ContactForm';
import ContactsList from './ContactsList'

class App extends Component {
  constructor () {
    super()

    this.state = {
      contacts: [
        {
          imageUrl: 'https://media-exp1.licdn.com/dms/image/C4D03AQFtD1m1fwk3aw/profile-displayphoto-shrink_400_400/0/1637639714385?e=1643846400&v=beta&t=c3B3SUjXftc4KiagUsZIlYm3biEUWDUxIvdinIpLCCs',
          contactName: 'Jordan Hunt',
          emailAddress:'capt.jdhunt@gmail.com',
          phoneNumber:'469-766-0179'
        },
      ]
    }

    this.addContact = this.addContact.bind(this)
  }

  addContact (contact) {
    this.setState({contacts: this.state.contacts.concat([contact])});
  }

  render() {

    const renderContacts = () => {
      return <ContactsList contacts={this.state.contacts}  />
    }

    return (
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="page-header">
            <br/>
            <h1>Contacts List</h1>
            <br/>
          </div>

          <div className="posts">
          </div>

          {renderContacts()}

          <ContactForm addContact={this.addContact} />

        </div>
      </div>
    );
  }
}
export default App;

// function App() {
//   return (
//     <div class="container-fluid justify-content-md-center">
      
//       <br/>
      
//       <div class="row">
//         <div class="col">
//           <h1>Contact List</h1>
//         </div>
//       </div>
      
//       <br/>
      
//       <div class="row">
//         <div class="col">
//           <button type="button" class="btn btn-primary">
//           Add Contact
//           </button>
//         </div>
//       </div>
      
//       <br/>
      
//       <div class="row" id="main-grid">
//         <div class="col-sm"><h6>Profile Pic</h6></div>
//         <div class="col-sm"><h6>Name</h6></div>
//         <div class="col-sm"><h6>Email Address</h6></div>
//         <div class="col-sm"><h6>Phone Number</h6></div>
//       </div>

//       <div className="contact-list">
//       </div>

//     </div>
