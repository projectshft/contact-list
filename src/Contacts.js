import {Switch, Route} from 'react-router-dom';
import PropTypes from 'prop-types';
import AllContacts from './AllContacts';
import ViewContact from './ViewContact';

const Contacts = ({contacts}) => {
  return (
    <Switch>
      <Route exact path="/contacts" render={() => (
          <AllContacts contacts={contacts}/>
      )} />

      <Route path="/contacts/:id" render={(routerProps) => (
          <ViewContact contactId={parseInt(routerProps.match.params.id, 10)} contacts={contacts}/>
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