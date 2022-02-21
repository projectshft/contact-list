import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Route,
  Routes,
  Link,
  useParams,
  useNavigate,
} from 'react-router-dom';
import PropTypes from 'prop-types';

const NewContact = ({ addNewContact }) => {
  const navigate = useNavigate();
  const [info, setInfo] = useState({
    firstName: '',
    lastName: '',
    image_url: '',
    email: '',
    phone_number: '',
  });

  const handleButtonClick = () => {
    const name = `${info.firstName} ${info.lastName}`;
    const contact = { ...info, name };

    addNewContact(contact);

    setInfo({
      firstName: '',
      lastName: '',
      image_url: '',
      email: '',
      phone_number: '',
    });

    navigate('/contacts');
  };

  return (
    <div className="new-contact-section">
      <h1>Create a New Contact</h1>
      <form>
        <div className="form-group">
          <label htmlFor="first-name">Enter their first name:</label>
          <input
            onChange={(e) =>
              setInfo({ ...info, firstName: e.currentTarget.value })
            }
            value={info.firstName}
            className="form-control"
            id="first-name-input"
            name="first-name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="last-name">Enter their last name:</label>
          <input
            onChange={(e) =>
              setInfo({ ...info, lastName: e.currentTarget.value })
            }
            value={info.lastName}
            className="form-control"
            id="last-name-input"
            name="last-name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Enter their email:</label>
          <input
            onChange={(e) => setInfo({ ...info, email: e.currentTarget.value })}
            value={info.email}
            className="form-control"
            id="email-input"
            name="email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone-number">Enter their phone number:</label>
          <input
            onChange={(e) =>
              setInfo({ ...info, phoneNumber: e.currentTarget.value })
            }
            value={info.phoneNumber}
            className="form-control"
            id="phone-number-input"
            name="phone-number"
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Enter a link to their image:</label>
          <input
            onChange={(e) => {
              setInfo({ ...info, imageURL: e.currentTarget.value });
            }}
            value={info.imageURL}
            className="form-control"
            id="image-url-input"
            name="image"
          />
        </div>
        <button
          onClick={handleButtonClick}
          type="button"
          className="btn btn-primary"
          id="submit-new-contact"
        >
          Create New Contact
        </button>
      </form>
      <Link to="/contacts">
        <button className="btn btn-primary back-button" type="button">
          Back to All Contacts
        </button>
      </Link>
    </div>
  );
};

NewContact.propTypes = {
  addNewContact: PropTypes.func.isRequired,
};

export default NewContact;
