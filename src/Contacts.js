import { Route, Switch } from "react-router-dom"
import FullContact from "./Full-Contact"
import NewContact from "./New-Contact"
import ViewContact from "./View-Contact"
import PropTypes from 'prop-types'

const Contacts = ({contacts, addContact}) => (
  <Switch>
    <Route exact path='/contacts' render={() => (
      <FullContact contacts={contacts} />
    )} />

    <Route path='/contacts/new' render={(routerProps) => (
      <NewContact addContact={addContact} history={routerProps.history} />
    )} />

    <Route path='/contacts/:Id' render={(routerProps) => (
      <ViewContact contacts={contacts} history={routerProps.history} contactId={routerProps.match.params.Id} />
    )} />
  </Switch>
  
)

Contacts.propTypes = {
addContact:PropTypes.func.isRequired
}


export default Contacts