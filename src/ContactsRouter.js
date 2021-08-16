import { Switch, Route } from 'react-router-dom'
import Contact from './Contact'
import ContactNew from './ContactNew'
import AllContacts from './AllContacts'

const ContactsRouter = ({contacts, addContact}) => (
 
  <Switch>      
    <Route path='/contacts/new' render={(routerProps) => (
      <ContactNew history={routerProps.history} contacts={contacts} addContact={addContact} />
    )} /> 

    <Route path='/contacts/:contactId' render={(routerProps) => (
      <Contact id={parseInt(routerProps.match.params.contactId)} contacts={contacts} />
    )} />

    <Route exact path='/contacts' render={() => (
      <AllContacts contacts={contacts} />
    )} /> 
  </Switch>
)

export default ContactsRouter