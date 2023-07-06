import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Contact = ({ contact }) => {
  return (
    <Link to={"/contacts/${contact.profileID}"}>
      <h3>Name: {contact.name}</h3>
      <img src={contact.imageURL} />
      <p>Email: {contact.email}</p>
      <p>Phone Number: {contact.phoneNumber}</p>
    </Link>
  );
};

Contact.propTypes = {
  contact: PropTypes.object,
};

export default Contact;
