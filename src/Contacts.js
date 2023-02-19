import { Switch, Route } from 'react-router-dom'
import ContactNew from './ContactNew'
import Profile from './Profile'
import ContactList from './ContactList';

const Contacts = ({contacts, addContact}) => {
  return (
    <Switch>
      <Route path='/contacts/new' render={(routerProps) => (
        <ContactNew history={routerProps.history} contacts={contacts} addContact={addContact} />
      )}/>
      <Route path='/contacts/num' component={Profile}/>
      <Route path='/contacts' render={() => (
        <ContactList contacts={contacts}/>
      )}/>
    </Switch>
  )
};

export default Contacts
