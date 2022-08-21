import { Link, Redirect, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import findContactById from './findContactById';

const EditContact = (props) => {
  const { id, contacts, setContacts } = props;
  const contactObj = contacts;
  const history = useHistory();
  const contact = findContactById(contactObj, id)[0];
  const [editContact, setEditContact] = useState({
    id: contact.id,
    fName: contact.fName,
    lName: contact.lName,
    imageUrl: contact.imageUrl,
    email: contact.email,
    phoneNumber: contact.phoneNumber,
  });
  console.log(id, contactObj);
  console.log(contact);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newArray = editContact;
    // console.log(newArray);
    setEditContact(editContact);
    setContacts({ ...contacts, ...editContact });
    history.push('/');
  };

  return (
    <div className="container">
      <h1>Edit Contact</h1>
      {contact.fName}

      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="fName"
            onChange={(e) =>
              setEditContact({ ...editContact, fName: e.target.value })
            }
            placeholder="First Name"
            value={editContact.fName}
          />
          <br />
          <input
            type="text"
            name="lName"
            onChange={(e) =>
              setEditContact({ ...editContact, lName: e.target.value })
            }
            placeholder="Last Name"
            value={editContact.lName}
          />
          <br />
          <input
            type="email"
            name="email"
            onChange={(e) =>
              setEditContact({ ...editContact, email: e.target.value })
            }
            placeholder="Email"
            value={editContact.email}
          />
          <br />
          <input
            type="tel"
            name="phoneNumber"
            onChange={(e) =>
              setEditContact({ ...editContact, phoneNumber: e.target.value })
            }
            placeholder="Phone Number"
            value={editContact.phoneNumber}
          />
          <br />
          <input
            type="text"
            name="imageUrl"
            onChange={(e) =>
              setEditContact({
                ...editContact,
                imageUrl: e.target.value
                  ? e.target.value
                  : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
              })
            }
            placeholder="Submit an image (optional)"
            value={editContact.imageUrl}
          />
          <br />
          <button
            type="submit"
            // onSubmit={() => setEditContact({ ...editContact, id: generateId() })}
          >
            Submit Now
          </button>
        </div>
      </form>
      <div>
        <h1>{editContact.fName}</h1>
      </div>
    </div>
  );
};

EditContact.propTypes = {
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
  id: PropTypes.number,
  setContacts: PropTypes.func,
};
export default EditContact;
