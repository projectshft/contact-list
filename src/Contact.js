const Contact = ({ contact }) => {
  return (
    <li>
      <h3>Name: {contact.name}</h3>
      <img src={contact.imageURL}></img>
      <p>Email: {contact.email}</p>
      <p>Phone Number: {contact.phoneNumber}</p>
    </li>
  );
};

export default Contact;
