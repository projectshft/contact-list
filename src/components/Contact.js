import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NotFound from "./NotFound";
import PropTypes from "prop-types";
import {
  formatPhoneNumber,
  parsePhoneNumber,
  formatPhoneNumberIntl,
} from "react-phone-number-input";

export default function Contact({ getContact, deleteContact }) {
  const navigate = useNavigate();
  const location = useLocation();

  const currentContactId = location.pathname.replace(/^\//, "");

  useEffect(() => {
    if (!getContact(currentContactId)) {
      const pageRedirect = setTimeout(() => navigate("/"), 3000);

      return () => {
        clearTimeout(pageRedirect);
      };
    }
  }, [getContact, currentContactId, navigate]);

  if (!getContact(currentContactId)) {
    return <NotFound />;
  }

  const contact = getContact(currentContactId);
  let displayPhoneNumber = "";

  if (contact.phone) {
    const phoneNumber = parsePhoneNumber(contact.phone);
    displayPhoneNumber = formatPhoneNumberIntl(phoneNumber.number);

    if (phoneNumber.country === "US") {
      displayPhoneNumber = formatPhoneNumber(phoneNumber.number);
    }
  }

  const handleDelete = () => {
    if (
      window.confirm(
        "Are you sure you want to delete this contact? This action cannot be undone."
      )
    ) {
      deleteContact(contact);
      navigate("/");
    }
  };

  return (
    <>
      <div className="d-flex flex-wrap">
        <div className="p-2">
          <img
            src={
              contact.profilePicture ||
              "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            }
            alt="contact photo"
            className="img-thumbnail custom-img"
          />
        </div>
        <div className="p-2">
          <h1>{contact.name}</h1>
          <h3>{displayPhoneNumber}</h3>
          {contact.email ? (
            <p>
              <strong>Email: </strong>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </p>
          ) : (
            ""
          )}
          <div className="d-flex flex-wrap">
            <button
              className="btn btn-success me-2 mt-2"
              onClick={() =>
                navigate(`/${contact.contactId}/edit`, { state: contact })
              }
            >
              Edit
            </button>
            <button className="btn btn-danger mt-2" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

Contact.propTypes = {
  getContact: PropTypes.func,
  deleteContact: PropTypes.func,
};
