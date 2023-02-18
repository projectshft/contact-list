import { Switch, Route } from 'react-router-dom'
import React from 'react'
import ContactList from './ContactList'
import ContactNew from './ContactNew'
import Contact from './Contact'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={ContactList}/>
        <Route path='/contact/new' component={ContactNew}/>
        <Route path='/contact/num' component={Contact}/>
      </Switch>
    </div>
  );
}

export default App;
