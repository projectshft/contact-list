import { Switch, Route } from 'react-router-dom'
import Contact from './Contact'
import ContactNew from './ContactNew'
import FullList from './FullList'

const Contacts = ({contacts, addContact}) => (
  <Switch>
    <Route path='/contacts/new' render={(routerProps) => (
      <ContactNew history={routerProps.history} contacts={contacts} addContact= {addContact} />
    )}/>

    <Route path='/contacts/:id' render={(routerProps) => (
      <Contact contactId={parseInt(routerProps.match.params.id, 10)} contacts={contacts} />
    )}/>

    <Route path='/contacts' render={() => (
      <FullList contacts={contacts} />
    )}/>
  </Switch>
)

export default Contacts
