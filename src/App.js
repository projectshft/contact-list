import React, { useState } from "react";
import ContactList from "./ContactList";
import AddContact from './AddContact';
import ContactDetails from './ContactDetails';
import { BrowserRouter, Switch, Route  } from 'react-router-dom';
import johnDoe from './john-doe.jpg';
import janeDoe from './jane-doe.jpg';
import jimmyChu from './jimmy-chu.jpg';
import batman from './batman.jpg';

const App = () => {
  // contacts state using useState hook and functional component
  const [contacts, setContacts] = useState([
    { id: 1, name: 'John Doe', email: 'john_doe@aol.com', phoneNumber: 2124569900, profilePicture: johnDoe },
    { id: 2, name: 'Jane Doe', email: 'jane_doe@aol.com', phoneNumber: 2124563319, profilePicture: janeDoe  },
    { id: 3, name: 'Jimmy Chu', email: 'jimmy_chu@hotmail.com', phoneNumber: 9092234518, profilePicture: jimmyChu },
    { id: 4, name: 'Batman', email: 'batman@comcast.net', phoneNumber: 4403447876, profilePicture: batman  }
  ]);
  
  // function for deleting a post on home page
  const handleDelete = (id) => {
    const newContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(newContacts);
  }

  // function for adding new contact into contacts state
  const handleContactChange = (newData) => {
    setContacts(contacts.concat(newData));
  }

  return (
    <BrowserRouter>
      <div className="app">
      <Switch>
        <Route exact path='/'>
          <ContactList contacts={contacts} handleDelete={handleDelete}/>
        </Route>
        <Route path='/contacts/new'>
          <AddContact handleContactChange={handleContactChange}/>
        </Route>
        <Route path='/contacts/:id'>
          <ContactDetails contacts={contacts} />
        </Route>
      </Switch>
      </div>
    </BrowserRouter>
  );
}
 
export default App;