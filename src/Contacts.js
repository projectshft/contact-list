import {Switch, Route} from 'react-router-dom';
import AllContacts from './AllContacts';
import ViewContact from './ViewContact';

const Contacts = ({contacts}) => {
  return (
    <Switch>
      <Route exact path="/contacts" render={() => (
          <AllContacts contacts={contacts}/>
      )} />

      <Route path="/contacts/:id" render={(routerProps) => (
          <ViewContact/>
      )} />
    </Switch>
  )
}

export default Contacts;