import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const ContactForm = (props) => {
  const navigate = useNavigate();
  const [newContact, setNewContact] = useState({
    id: '',
    name: '',
    email: '',
    phoneNumber: '',
    imageUrl: '',
  });

  // const inputHandler = (e) => {
  //   setNewContact({ [e.target.name]: e.target.value });
  // };
  const generateId = () => Math.round(Math.random() * 100000000);

  const handleSubmit = (e) => {
    e.preventDefault();
    // setNewContact({ ...newContact, id: generateId() });
    console.log(newContact);
    navigate('../', { replace: true, state: { newContact } });
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
          onSubmit={() => setNewContact({ ...newContact, id: generateId() })}
        >
          Submit Now
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
