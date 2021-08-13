import { Switch, Route } from "react-router-dom";
import Contact from './Contact';
import ContactNew from './ContactNew';
import AllContacts from "./AllContacts";


const ContactList = ({contacts, addContact}) => (
  <Switch>
    <Route path='/new' render={(routerProps) => (
      <ContactNew history={routerProps.history} contacts={contacts} addContact={addContact} />
    )} /> 

    {/* Number won't work here. Add prop to state for id */}
    {/* <Route path='/:number' render={(routerProps) => (
      <Contact contactId={parseInt(routerProps.match.params.number, 10)} contacts={contacts} />
    )} /> */}

    <Route path='/' render={() => (
      <AllContacts contacts={contacts} />
    )} />
  </Switch>
);

export default ContactList