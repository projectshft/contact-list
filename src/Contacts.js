import { Switch, Route } from 'react-router-dom'
import ContactList from './ContactList'
import ContactForm from './ContactForm'
import Contact from './Contact'


const Contacts = ({ contacts, addContact }) => {
  return (
    <Switch>
      <Route exact path='/contacts/new' render={(routerProps) => (
        <ContactForm history={routerProps.history} contacts={contacts} addContact={addContact} /> 
      )}/>

      <Route path='/contacts/:index'render={(props) => 
        <Contact props={props} contacts={contacts} />
      } />
      
      <Route path='/contacts' render={() => (
        <ContactList contacts={contacts} />
      )}/>


    </Switch>
  )
}

export default Contacts

