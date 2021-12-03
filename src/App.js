import React, { useState } from 'react';
import ContactForm from './ContactForm';
import ContactsList from './ContactsList'

function App() {
  const [contacts, setContacts] = useState(
    [
      {
      imageUrl: 'https://media-exp1.licdn.com/dms/image/C4D03AQFtD1m1fwk3aw/profile-displayphoto-shrink_400_400/0/1637639714385?e=1643846400&v=beta&t=c3B3SUjXftc4KiagUsZIlYm3biEUWDUxIvdinIpLCCs',
      contactName: 'Jordan Hunt',
      emailAddress:'capt.jdhunt@gmail.com',
      phoneNumber:'469-766-0179'
      }
    ]
  )
  function addContact(contact) {
    setContacts(contacts.concat([contact]));
  }
  return (
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <div className="page-header">
          <br/>
          <h1>Contacts List</h1>
          <br/>
        </div>

        <div className="contacts">
        </div>

        <button type="button" className="btn btn-primary add-contact">Add Contact</button>

        <ContactsList contacts={contacts}  />

        <ContactForm addContact={addContact} />

      </div>
    </div>
  ); 
}

// onClick={handleClick} <-----add to button

export default App;

















// class App extends Component {
//   constructor () {
//     super()

//     this.state = {
//       contacts: [
//         {
//           imageUrl: 'https://media-exp1.licdn.com/dms/image/C4D03AQFtD1m1fwk3aw/profile-displayphoto-shrink_400_400/0/1637639714385?e=1643846400&v=beta&t=c3B3SUjXftc4KiagUsZIlYm3biEUWDUxIvdinIpLCCs',
//           contactName: 'Jordan Hunt',
//           emailAddress:'capt.jdhunt@gmail.com',
//           phoneNumber:'469-766-0179'
//         },
//       ]
//     }

//     this.addContact = this.addContact.bind(this)
//   }

//   addContact(contact) {
//     this.setState({contacts: this.state.contacts.concat([contact])});
//   }

//   render() {

//     const renderContacts = () => {
//       return <ContactsList contacts={this.state.contacts}  />
//     }

//     return (
//       <div className="row">
//         <div className="col-md-6 offset-md-3">
//           <div className="page-header">
//             <br/>
//             <h1>Contacts List</h1>
//             <br/>
//           </div>

//           <div className="posts">
//           </div>

//           {renderContacts()}

//           <ContactForm addContact={this.addContact} />

//         </div>
//       </div>
//     );
//   }
// }
