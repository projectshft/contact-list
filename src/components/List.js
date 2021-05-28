import React from 'react';
import {Switch, Route} from 'react-router-dom';
import ContactItem from './ContactItem';
import EditContactForm from './EditContactForm'; 

const List = ({contacts, editContact, editStatus, setEditStatus}) => {

  return (
    <div>
      <Switch>

      <Route exact path='/contacts/:id' render={(routerProps) => (
        <ContactItem selectedContactId={routerProps.match.params.id} contacts={contacts} />
      )}/>

      <Route path="/contacts/:id/edit" render={(routerProps) => (
        <EditContactForm editContact={editContact} contacts={contacts} editStatus={editStatus} setEditStatus={setEditStatus} selectedContactId={routerProps.match.params.id} />
        )}/>

      </Switch>
    </div>
  );
};

export default List; 