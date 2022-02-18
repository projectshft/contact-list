import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ContactNew from './ContactNew'
import Contact from './Contact'

const Contacts = () => (
    <Switch>
      <Route path='/contacts/new' component={ContactNew} />
      <Route path='/contacts/id' component={Contact} />
    </Switch>
);

export default Contacts;