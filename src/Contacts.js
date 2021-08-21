import { Switch, Route } from 'react-router-dom'
import ContactNew from './ContactNew'
import ContactsList from './ContactsList'

const Contacts = ({contacts, addContact}) => (
  <Switch>

    {/* ? This Route will not render if it is in Contacts.js instead of App.js.  */}

    <Route path = '/contacts/new' render={(routerProps) => (
      <ContactNew history={routerProps.history} contacts={contacts} addContact={addContact} />
    )} /> 

    <Route path='/contacts' render={() => (
      <ContactsList contacts={contacts}/>
    )}/>
  </Switch>
)

export default Contacts
