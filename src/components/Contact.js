import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NotFound from "./NotFound";
import PropTypes from "prop-types";
import { formatPhoneNumber, parsePhoneNumber, formatPhoneNumberIntl } from "react-phone-number-input";

export default function Contact({getContact}) {
  const navigate = useNavigate();
  const location = useLocation();

  const currentContactId = location.pathname.replace(/^\//, "");

  useEffect(() => {
    if (!getContact(currentContactId)) {
      const pageRedirect = setTimeout(() => navigate("/"), 3000)

      return () => {
        clearTimeout(pageRedirect);
      }
    }
  }, [getContact, currentContactId, navigate]);

   if (!getContact(currentContactId)) {
    return <NotFound />;
  }

  const contact = getContact(currentContactId);
  const phoneNumber = parsePhoneNumber(contact.phone);
  let displayPhoneNumber = formatPhoneNumberIntl(phoneNumber.number);
  
  if (phoneNumber.country === "US") {
    displayPhoneNumber = formatPhoneNumber(phoneNumber.number);
  }

  return (
    <>
    <div className="d-flex flex-wrap">
      <div className="p-2">
        <img src={contact.profilePicture} alt="contact photo" className="img-thumbnail custom-img" />
      </div>
      <div className="p-2">
        <h1>{contact.name}</h1> 
        <h3>{displayPhoneNumber}</h3>
        {contact.email ? <p><strong>Email: </strong><a href={`mailto:${contact.email}`}>{contact.email}</a></p> : ""}
      </div>
    </div>
    </>
  );
}

Contact.propTypes = {
  getContact: PropTypes.func
};

