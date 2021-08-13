import {Switch, Route} from 'react-router-dom';
import PropTypes from 'prop-types';
import AllContacts from './AllContacts';
import ViewContact from './ViewContact';
import EditForm from './EditForm';

// Routes to view all or one contact and to edit contact
const Contacts = ({contacts, deleteContact, editContact}) => {
  return (
    <Switch>
      <Route exact path="/contacts" render={() => (
          <AllContacts contacts={contacts}/>
      )} />

      <Route exact path="/contacts/:id" render={(routerProps) => (
          <ViewContact 
            contactId={parseInt(routerProps.match.params.id, 10)} 
            contacts={contacts} 
            deleteContact={deleteContact}   
            history={routerProps.history}
          />
      )} />

      <Route path="/contacts/:id/edit" render={(routerProps) => (
          <EditForm 
            contactId={parseInt(routerProps.match.params.id, 10)} 
            contacts={contacts} 
            editContact={editContact}   
            history={routerProps.history}/>
      )} /> 
    </Switch>
  )
}

Contacts.propTypes = {
  contacts: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    imgUrl: PropTypes.string
  })
}

export default Contacts;