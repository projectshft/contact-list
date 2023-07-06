const ContactInfo = ({ contact }) => {
  return (
    <div>
      <h3>Name: {contact.name}</h3>
      <img src={contact.imageURL} />
      <p>Email: {contact.email}</p>
      <p>Phone Number: {contact.phoneNumber}</p>
    </div>
  );
};

export default ContactInfo;
