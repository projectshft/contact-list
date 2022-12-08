import { Switch, Route } from 'react-router-dom'
import Contact from './Contact'
import ContactNew from './ContactNew'
import ContactList from './ContactList'


const Roster = ({contacts, addContact}) => (
  <Switch>    
    <Route path='/new' render={(routerProps) => (
      <ContactNew history={routerProps.history} contacts={contacts} addContact={addContact} />
    )}/>
  
    <Route path='/contacts/:number' render={(routerProps) => (
      <Contact contactId={parseInt(routerProps.match.params.number, 10)} contacts={contacts} />
    )}/>
    
    <Route path='/contacts' render={() => (
      <ContactList contacts={contacts} />
    )}/>
  </Switch>
)

export default Roster