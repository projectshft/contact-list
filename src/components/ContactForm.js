import { Link, Redirect, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

const ContactForm = (props) => {
  const history = useHistory();
  const { contacts, setContacts } = props;
  const [newContact, setNewContact] = useState({
    id: '',
    name: '',
    imageUrl: '',
    email: '',
    phoneNumber: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newArray = contacts;
    newArray.push(newContact);
    setContacts(newArray);
    // <Redirect to="/" />;
    history.push('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="name"
          onChange={(e) =>
            setNewContact({ ...newContact, name: e.target.value })
          }
          placeholder="Name"
          value={newContact.name}
        />
        <br />
        <input
          type="email"
          name="email"
          onChange={(e) =>
            setNewContact({ ...newContact, email: e.target.value })
          }
          placeholder="Email"
          value={newContact.email}
        />
        <br />
        <input
          type="tel"
          name="phoneNumber"
          onChange={(e) =>
            setNewContact({ ...newContact, phoneNumber: e.target.value })
          }
          placeholder="Phone Number"
          value={newContact.phoneNumber}
        />
        <br />
        <input
          type="text"
          name="imageUrl"
          onChange={(e) =>
            setNewContact({ ...newContact, imageUrl: e.target.value })
          }
          placeholder="Submit an image (optional)"
          value={newContact.imageUrl}
        />
        <br />
        <button
          type="submit"
          // onSubmit={() => setNewContact({ ...newContact, id: generateId() })}
        >
          Submit Now
        </button>
      </div>
    </form>
  );
};

ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      imageUrl: PropTypes.string,
      email: PropTypes.string,
      phoneNumber: PropTypes.string,
    }).isRequired
  ).isRequired,
  setContacts: PropTypes.func,
};
export default ContactForm;
