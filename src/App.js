import { Switch, Route, Link, Redirect } from 'react-router-dom';
import {useState } from 'react';
import ContactsTable from './components/ContactsTable';
import NewContactForm from './components/NewContactForm';
import Contact from './components/Contact';
import './App.css';
import data from './data.json';

export default function App() {
  const [contacts, setContacts] = useState(data.contacts);

  const deleteEntry = (e) => {
    const toDelete = e.target.dataset.remove;
    const newContacts = contacts.filter(contact => contact.id != toDelete)
    setContacts(newContacts);
  }

  return (
    <div>
      <div className='row'>
        <div className='col-sm-4 offset-md-4 center'>
          <h1> Contact List</h1>
        </div>
      </div>
      <div className='row'>
        <div className='col-sm-8 offset-md-2'>
          <Switch>
            <Route exact path='/contacts'>
              <Link to='/contacts/newcontact'><button className='btn btn-primary'>add new contact</button></Link>
              <ContactsTable contacts={contacts}></ContactsTable>
            </Route>
            <Route path='/contacts/newcontact'>
              <NewContactForm contacts={contacts} setContacts={setContacts}></NewContactForm>
            </Route>
            <Route path='/contacts/:id'>
              <Contact contacts={contacts} setContacts={setContacts} deleteEntry={deleteEntry}/>
            </Route>
            <Route exact path="/">
              <Redirect to="/contacts"/>
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}