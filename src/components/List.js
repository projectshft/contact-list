import React from 'react';
import {Switch, Route} from 'react-router-dom';
import ContactInfo from './ContactInfo';
import EditContactForm from './EditContactForm'; 
import ContactForm from './ContactForm'; 

const List = ({contacts, addContact, editContact}) => {

  return (
    <div>
      <Switch>

      <Route path="/contacts/new" render={(routerProps) => (
        <ContactForm addContact={addContact} history={routerProps.history} />
      )} />

      <Route exact path='/contacts/:id' render={(routerProps) => (
        <ContactInfo selectedContactId={routerProps.match.params.id} contacts={contacts} />
      )}/>

      <Route path="/contacts/:id/edit" render={(routerProps) => (
        <EditContactForm editContact={editContact} contacts={contacts} selectedContactId={routerProps.match.params.id} history={routerProps.history}/>
      )}/>

      </Switch>
    </div>
  );
};

export default List; 