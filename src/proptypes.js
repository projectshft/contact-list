import PropTypes from 'prop-types';
import data from './data.json';
import NewContact from './NewContact';
import Contact from './Contact.js'
import Home from './Home';

data.propTypes= {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired
}

NewContact.propTypes = {
  contact_name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone_number: PropTypes.number.isRequired,
  img_url: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  handleSubmitContactClick: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

Contact.propTypes = {
  contactId: PropTypes.number.isRequired,
  contacts: PropTypes.array.isRequired,
  Link: PropTypes.elementType
};

Home.propTypes = {
  Link: PropTypes.elementType
}

