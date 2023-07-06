import { Link } from "react-router-dom";

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

export default Contact;
