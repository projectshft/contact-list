import { Link, Redirect, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

const ContactForm = (props) => {
  const generateId = () => Math.round(Math.random() * 100000000);
  const history = useHistory();
  const { contacts, setContacts } = props;
  const [newContact, setNewContact] = useState({
    id: generateId(),
    fName: '',
    lName: '',
    imageUrl:
      'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
    email: '',
    phoneNumber: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newArray = contacts;
    newArray.push(newContact);
    setContacts(newArray);
    history.push('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="fName"
          onChange={(e) =>
            setNewContact({ ...newContact, fName: e.target.value })
          }
          placeholder="First Name"
          value={newContact.fName}
        />
        <br />
        <input
          type="text"
          name="lName"
          onChange={(e) =>
            setNewContact({ ...newContact, lName: e.target.value })
          }
          placeholder="Last Name"
          value={newContact.lName}
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
      fName: PropTypes.string,
      lName: PropTypes.string,
      imageUrl: PropTypes.string,
      email: PropTypes.string,
      phoneNumber: PropTypes.string,
    }).isRequired
  ).isRequired,
  setContacts: PropTypes.func,
};
export default ContactForm;
