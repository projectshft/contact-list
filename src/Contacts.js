import { Route, Switch } from "react-router-dom"
import FullContact from "./Full-Contact"
import NewContact from "./New-Contact"
import ViewContact from "./View-Contact"

const Contacts = ({contacts, addContact}) => (
  <Switch>
    <Route exact path='/contacts' render={() => (
      <FullContact contacts={contacts} />
    )} />

    <Route path='/contacts/new' render={(routerProps) => (
      <NewContact addContact={addContact} history={routerProps.history} />
    )} />

    <Route path='/contacts/:name' render={(routerProps) => (
      <ViewContact contacts={contacts} contactName={routerProps.match.params.name} />
    )} />
  </Switch>
  
)


export default Contacts