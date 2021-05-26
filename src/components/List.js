import React from 'react';
import {Switch, Route} from 'react-router-dom';
import ContactItem from './ContactItem';

const List = ({contacts}) => {

  return (
    <div>
      <Switch>

      <Route path='/contacts/:id' render={(routerProps) => (
        <ContactItem selectedContactId={routerProps.match.params.id} contacts={contacts} />
      )}/>
  
      </Switch>
    </div>
  );

};

export default List; 