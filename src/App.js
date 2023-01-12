import { Switch, Route } from 'react-router-dom'
import { useState } from 'react';
import Home from './Home'
import Contacts from './Contacts'
import ViewContact from './View-Contact';

function App() {
  const [contacts, setContacts] = useState([
    {
    name: "Albert Einstein",
    image: "https://en.wikipedia.org/wiki/Albert_Einstein#/media/File:Einstein_1921_by_F_Schmutzer_-_restoration.jpg",
    email: "aeinstein@example.com",
    phoneNumber: "15555555555"
  }
]);

  const addContact = (contact) => (
    setContacts( contacts => {
      return [...contacts, contact]
    })
  )

  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/contacts' render={() => (
          <Contacts addContact={addContact} contacts={contacts} />
        )} />
      </Switch>
    </div>
  );
}

export default App;


// {
//   "contacts": [
//     {
//       "id": 70219577,
//       "name": "Albert Einstein",
//       "image_url": "https://en.wikipedia.org/wiki/Albert_Einstein#/media/File:Einstein_1921_by_F_Schmutzer_-_restoration.jpg",
//       "email": "aeinstein@example.com",
//       "phone_number": "15555555555"
//     }
//   ]
// }