import React from 'react';
import {  Switch, Route } from 'react-router-dom';
import ContactList from './ContactList';
import AddContact from './AddContact';
import ViewContact from './ViewContact';

const Root = () => (
  <div>
    <Switch>
      <Route exact path="/contacts" component={ContactList} />
      <Route path="/contacts/new" component={AddContact} />
      <Route path="/contacts/:id" component={ViewContact} />
    </Switch>
  </div>
);

export default Root