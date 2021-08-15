import { Switch, Route } from 'react-router-dom'
import Contact from './Contact'
import ContactNew from './ContactNew'
import AllContacts from './AllContacts'

const ContactsRouter = ({contacts, addContact}) => (
  <Switch>
    <Route exact path='/contacts' render={() => (
          <AllContacts contacts={contacts} />
        )} />    

    <Route path='/contacts/new' render={(routerProps) => (
          <ContactNew history={routerProps.history} contacts={contacts} addContact={addContact} />
        )} /> 

    <Route path='/contacts/:id' render={(routerProps) => (
          <Contact contactId={parseInt(routerProps.match.params.contactId, 10)} contacts={contacts} />
        )} />
  </Switch>
)

export default ContactsRouter