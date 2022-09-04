import { Switch, Route } from 'react-router-dom'
import Contact from './Contact'
import NewContact from './NewContact'
import AllContacts from './AllContacts'

const Rolodex = ({contacts, addContact}) => (
  <Switch>    
    <Route path='/rolodex/new' render={(routerProps) => (
      <NewContact history={routerProps.history} contacts={contacts} addContact={addContact} />
    )}/>
  
    <Route path='/rolodex/:number' render={(routerProps) => (
      <Contact contactId={parseInt(routerProps.match.params.number, 10)} contacts={contacts} />
    )}/>
    
    <Route path='/rolodex' render={() => (
      <AllContacts contacts={contacts} />
    )}/>
  </Switch>
)

export default Rolodex