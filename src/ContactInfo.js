import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const ContactInfo = () => {
  const location = useLocation();
  const contact = location.state;
  return (
    <div>
      <h1>Contact List</h1>
      <Link to="/contacts">
        <button type="button" className="btn btn-primary">
          Back
        </button>
      </Link>
      <img src={contact.imageURL} />
      <br />
      <h3>{contact.name}</h3>
      <br />
      <p>{contact.email}</p>
      <br />
      <p>{contact.phoneNumber}</p>
      <br />
    </div>
  );
};

export default ContactInfo;
