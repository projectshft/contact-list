import { Switch, Route } from 'react-router-dom'
import ContactNew from './ContactNew'
import Profile from './Profile'
import ContactList from './ContactList';

const Contacts = () => {
  return (
    <Switch>
      <Route path='/contacts/new' component={ContactNew}/>
      <Route path='/contacts/num' component={Profile}/>
      <Route path='/contacts' component={ContactList}/>
    </Switch>
  )
};

export default Contacts