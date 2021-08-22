import { Switch, Route } from 'react-router-dom'
import ContactNew from './ContactNew'
import ContactPage from './ContactPage'
import ContactsList from './ContactsList'

const Contacts = ({contacts, addContact}) => (
  <Switch>

    <Route path='/contacts/new' render={(routerProps) => (
      <ContactNew history={routerProps.history} contacts={contacts} addContact={addContact} />
    )} /> 

    <Route path='/contacts/:id' render={(routerProps) => (
      <ContactPage contactId={parseInt(routerProps.match.params.id, 10)} contacts={contacts} />
        )}/>

    <Route path='/contacts' render={() => (
      <ContactsList contacts={contacts}/>
    )}/>
  </Switch>
)

export default Contacts
