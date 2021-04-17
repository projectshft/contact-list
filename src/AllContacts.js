import { Switch, Route } from 'react-router-dom';
import Contact from './Contact';
import ContactForm from './ContactForm';
import ContactsList from './ContactsList';

const AllContacts = ({ contacts, addContact }) => (
  <Switch>
    <Route path='/contacts/new' render={(routerProps) => (
      <ContactForm history={routerProps.history} contacts={contacts} addContact={addContact} />
    )} />
    <Route path='/contacts/:number' render={(routerProps) => (
      <Contact contactId={parseInt(routerProps.match.params.number, 10)} contacts={contacts} />
    )} />
    <Route path='/contacts' render={() => (
      <ContactsList contacts={contacts} />
    )} />
  </Switch>
)

export default AllContacts;