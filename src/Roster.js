import { Switch, Route } from 'react-router-dom'
import React from 'react';
import Contact from './Contact';
import ContactList from './ContactList';
import ContactNew from './ContactNew';

const Roster = ({contacts, addContact}) => (
  <Switch>    
    <Route path='/new' render={(routerProps) => (
      <ContactNew history={routerProps.history} addContact={addContact} />
    )}/>
  
    <Route path='/:number' render={(routerProps) => (
      <Contact contactId={parseInt(routerProps.match.params.number, 10)} contacts={contacts} />
    )}/>
    
    <Route path='/' render={() => (
      <ContactList contacts={contacts} />
    )}/>
  </Switch>
)

export default Roster

