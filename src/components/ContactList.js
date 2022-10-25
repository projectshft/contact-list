import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function ContactList({contacts}) {
  const navigate = useNavigate();

  // Sorts the list alphabetically
  contacts.sort((a, b) => a.name.localeCompare(b.name));

  // click handler that links to the contact details page
  const goToContactPage = (id) => {
    navigate(`/contacts/${id}`)
  };
  
  // renders the list of contacts
  const list = () => contacts.map((contact, id) => {
    return (
      <tr key={id} onClick={() => goToContactPage(contact.id)}>
        <td><img src={contact.imageUrl} alt="" /></td>
        <td>{contact.name}</td>
        <td>{contact.email}</td>
        <td>{contact.phoneNumber}</td>
      </tr>
    )
  });

  // contact list page (home page)
  return (
    <div>
      <h1>Contact List</h1>
      <div className="container">
        <Link to="/add-contact">
          <button type="button" id="add-contact" className="btn btn-primary">Add New Contact</button>
        </Link>
      </div>
      <div className='container'>
      <table className="table table-hover table-striped table-bordered align-middle">
        <thead>
          <tr>
            <th scope="col">PHOTO</th>
            <th scope="col">NAME</th>
            <th scope="col">EMAIL</th>
            <th scope="col">PHONE NUMBER</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {list()}
        </tbody>
      </table>
    </div>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired
  })).isRequired,
}
