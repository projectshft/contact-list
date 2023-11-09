import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link, useHistory } from "react-router-dom";
import PropTypes from 'prop-types'

const ContactList = ({contacts, deleteContact}) => {
//make sure contact list displays contacts and removes contacts with delete button
    const [contactList, setContactList] = useState (contacts)
//setting  state for the list
    const history = useHistory();

    const goToAddContactRoute = () => {history.push('/addcontact')}
//adding function for button below to go to add contact page
    const handleDeleteContact = (contactId) => {
        const updatedContacts = contactList.filter((c) => c.id !== contactId);
        
        setContactList(updatedContacts);

        deleteContact(contactId)
        //this function deletes contact and updates contactList after click
    }

    return(//returning a template for the contacts to display in
    <div className='contact-container'>
      <div className='row'>
        <div className='col-md-10 offset-1'>
            <table className='table table-hover table-bordered table-striped table-dark'>
                <thead className='thead-dark'>
                    <tr>
                        <th scope='col'></th>
                        <th scope='col'>Photo</th>
                        <th scope='col'>Name</th>
                        <th scope='col'>Number</th>
                        <th scope='col'>Email</th>
                        <th scope='col'>ID #</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((c) => //mapping the contact data to plug into the table created above
                        <tr key={c.id}>
                          <td><button type='button' className='btn btn-danger' onClick={() => handleDeleteContact(c.id)}>Delete Contact</button></td>
                          <td><img src={c.photo_url} width={60} height={60} alt='No Photo to display'/></td>
                          <td><Link to={`/contactlist/${c.id}`}>{c.name}</Link></td>
                          <td>{c.phone_number}</td>
                          <td>{c.email}</td>
                          <td>{c.id}</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <div>
                {/* made a button to go to add contact page and utilzied function above in order to implement click functionality */}
            <button type="button" 
            className="btn btn-light" 
            data-toggle="button" 
            aria-pressed="false" 
            autoComplete="off"
            onClick={goToAddContactRoute}>Create New Contact</button> 
            </div>
        </div>
      </div>
    </div>
  )
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape(
        {id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        phone_number: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        photo_url: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default ContactList