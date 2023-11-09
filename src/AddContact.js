import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

const AddContact = ({ addContact }) => {
  const [newContact, setNewContact] = useState({ photo_url: '', name: '', email: '', phone_number: '',  });
  const history = useHistory();
  //using state and history to create the new contact and allowing it to be passed into the contactList state

  const handleAddContact = () => {
    const contact = {
      id: Math.round(Math.random() * 100000000),
      photo_url: newContact.photo_url,
      name: newContact.name,
      email: newContact.email,
      phone_number: newContact.phone_number,
    };
    //button functionality to add desired info

    addContact(contact);

    setNewContact({ photo_url: '', name: '', email: '', phone_number: '', id: ''});

    history.push('./contactlist');
    //adding the contact to the contact list history 
  };

  return (//creating form and input fields for user to add contact info
    <form>
      <div className='form-add'>
        <input
        type="text"
        placeholder="Photo"
        value={newContact.photo_url}
        onChange={(e) => setNewContact({ ...newContact, photo_url: e.target.value })}
      />
      </div>
      <div className='form-add'>
      <input
        type="text"
        placeholder="Name"
        value={newContact.name}
        onChange={(e) => setNewContact({ ...newContact, name: e.target.value })}
      />
      </div>
      <div className='form-add'>
      <input
        type="text"
        placeholder="Email"
        value={newContact.email}
        onChange={(e) => setNewContact({ ...newContact, email: e.target.value })}
      />
      </div>
      <div className='form-add'>
        <input
        type="text"
        placeholder="Phone Number"
        value={newContact.phone_number}
        onChange={(e) => setNewContact({ ...newContact, phone_number: e.target.value })}
        />
      </div>
      <div class='hidden'>
        {/* //hiding this input field because math.random will create this info above */}
        <input
        type="text"
        placeholder="ID"
        value={newContact.id}
        onChange={(e) => setNewContact({ ...newContact, id: e.target.value })}
      />
      </div>
      <button class="btn btn-light" 
            data-toggle="button" 
            aria-pressed="false" 
            autoComplete="off" 
            onClick={handleAddContact}>Save New Contact</button>
    </form>
  );
};

export default AddContact;