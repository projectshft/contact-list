import { Switch, Route } from 'react-router-dom'
import React, { useState } from 'react'
import AllContacts from './AllContacts';
import ContactsList from './ContactsList';

const App = () => {
  const [contacts, setContacts] = useState([
    { number: 1, name: 'Jane Doe', phoneNumber: 1234567890, email: 'jane.doe@gmail.com', profilePicture: 'https://pyxis.nymag.com/v1/imgs/47c/71a/130bf1e557e534b3f2be3351afc2ecf952-17-rachel-green-jewish.rsquare.w700.jpg' },
    { number: 2, name: 'John Smith', phoneNumber: 987654321, email: 'john.smith@gmail.com', profilePicture: 'https://upload.wikimedia.org/wikipedia/en/d/da/Matt_LeBlanc_as_Joey_Tribbiani.jpg' }
  ])

  const addContact = (contact) => {
    setContacts(contacts => {
      return [...contacts, contact]
    });
  }
  return (
    <div>
      <Switch>
        <Route exact path="/" render={() => (
          <ContactsList contacts={contacts} />
        )} />
        <Route path="/contacts" render={() => (
          <AllContacts addContact={addContact} contacts={contacts} />
        )} />
      </Switch>
    </div>
  )
}

export default App;

// class App extends Component {
//   constructor() {
//     super()

//     this.state = {
//       contacts: [{ name: 'Jane Doe', phoneNumber: 1234567890, email: 'jane.doe@gmail.com', profilePicture: 'https://static.wikia.nocookie.net/friends/images/2/24/Rachel_long_hair.jpg/revision/latest/top-crop/width/220/height/220?cb=20190210053939' },
//       { name: 'John Smith', phoneNumber: 987654321, email: 'john.smith@gmail.com', profilePicture: 'https://upload.wikimedia.org/wikipedia/en/d/da/Matt_LeBlanc_as_Joey_Tribbiani.jpg' }]
//     }
//     this.addContact = this.addContact.bind(this);
//   }

//   addContact(contact) {
//     this.setState({ contacts: this.state.contacts.concat([contact]) });
//   }

//   render() {
//     return (
//       <div className="row">
//         <div className="col-md-6 offset-md-3">
//           <div className="page-header">
//             <h1>Contact List</h1>
//           </div>

//           <div className="contacts">
//           </div>
//           <ContactsList contacts={this.state.contacts} />
//           <ContactForm addContact={this.addContact} />

//         </div>
//       </div>
//     );
//   }
// }

// export default App;