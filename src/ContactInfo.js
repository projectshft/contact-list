import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const ContactInfo = () => {
  const location = useLocation();
  const contact = location.state;
  return (
    <div>
      <div>
        <h1 className="pageHeader">Contact List</h1>
        <Link to="/contacts">
          <button type="button" className="btn btn-primary backBtn">
            Back
          </button>
        </Link>
      </div>
      <div className="contactTile">
        <img src={contact.imageURL} className="imgMaxWidth" />
        <br />
        <h3>{contact.name}</h3>
        <br />
        <p>{contact.email}</p>
        <br />
        <p>{contact.phoneNumber}</p>
      </div>
    </div>
  );
};

export default ContactInfo;
