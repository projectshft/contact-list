import ContactsList from "./ContactsList";
import PropTypes from "prop-types";

const ContactInfo = ({ contact }) => {
  return (
    <div>
      <img src={contact.imageURL} />
      <br />
      <h3>Name: {contact.name}</h3>
      <br />
      <p>Email: {contact.email}</p>
      <br />
      <p>Phone Number: {contact.phoneNumber}</p>
      <br />
    </div>
  );
};

ContactsList.propTypes = {
  contact: PropTypes.object,
};

export default ContactInfo;
