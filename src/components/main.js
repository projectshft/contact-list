import React, {useState} from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import ContactList from './contact_list'
import ContactNew from './contact_new';
import ContactId from './contact_id';


const Main = () => {
  const [contactFromMain, setContacts] = useState([
    {
      "id": 70219577,
      "name": "Albert Einstein",
      "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Einstein_1921_by_F_Schmutzer_-_restoration.jpg/800px-Einstein_1921_by_F_Schmutzer_-_restoration.jpg",
      "email": "aeinstein@example.com",
      "phone_number": "15555555555"
    }
  ]);

  const addNewContact = (passedFromNew) => {
    setContacts(contactFromMain.concat(passedFromNew))
  }

  return(
  <div>
    <Switch>
      <Route exact path="/" render={() => (
      <ContactList passFromMain={contactFromMain}/>
      )} />

      <Route path="/contacts/new" render={() => (
      <ContactNew passNewContact={addNewContact} />

      )} />
      <Route path="/contacts/:id" render={() => (
      <ContactId passFromMain={contactFromMain} />
      )} />
  </Switch>
</div>
  )
};

export default Main