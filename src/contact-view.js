import { useNavigate } from "react-router-dom";
const ContactView = (props) => {
  
  // Find contact from state using current URL
  const contactId = window.location.pathname.replace(/\//, '');
  const contact = props.contacts.find(contact => contact.id == contactId);

  // Navigation back to contact list
  const navigate = useNavigate();
  const handleBackSubmit = () => {
    navigate('/');
  }

  return (
  <div>     
    <h1> {contact.name}</h1>
    <img src = {contact.image_url}></img>
    <h3> Phone Number: {contact.phone_number}</h3>
    <h3> Email: {contact.email}</h3>
    <button onClick = {handleBackSubmit} className="btn btn-primary">Back</button>
  </div>
  )
}

export default ContactView;