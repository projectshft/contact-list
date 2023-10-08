import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const ContactRows = (props) => {
  const contacts = props.contacts
  const navigate = useNavigate();
  
  return (
    contacts.map ((contact) => {
      // Map through contacts array and create a table row for each one, complete with navigation on click //
      const ContactView = (event) => {
        navigate(`/${event.currentTarget.id}`)}
       return (
      <tr onClick = {ContactView} key = {contact.id} id = {contact.id}>
        <td><img alt = "contact" src = {contact.image_url}/></td>
         <td>{contact.name}</td>
         <td>{contact.email}</td>
         <td>{contact.phone_number}</td>
    </tr>
      )
    }))
  }

    // PropTypes. 
ContactRows.propTypes = {
  contacts: PropTypes.array.isRequired
}

export default ContactRows