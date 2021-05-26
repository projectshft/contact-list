import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import ContactItem from './ContactItem';
//import ContactList from './ContactList'; 
//import Home from './Home';

const List = ({contacts}) => {

  return (
    <div>
      <Switch>

      <Route path="./contacts/:number" render={(routerProps) => {
          <ContactItem contactId={routerProps.match.params.id} contacts={contacts} />
        }} />
  
      </Switch>
    </div>
  );

 
};

export default List; 