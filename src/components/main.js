import React, {useState} from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import ContactList from './contact_list'
import ContactNew from './contact_new';
import ContactId from './contact_id';


const Main = () => {
  const [contactFromMain, setContacts] = useState([]);

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
      <Route path="/contacts/:id" render={(props) => (
      <ContactId {...props} passFromMain={contactFromMain}/>
      )} />
  </Switch>
</div>
  )
};

export default Main