import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function ContactList({contacts}) {
  const navigate = useNavigate();
  const goToContactPage = (id) => {
    navigate(`/contacts/${id}`)
  };

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

  //Table that displays list of contacts
  return (
    <div className="container">
      <h1>Contact List</h1>
        <Link to="/add-contact"><button type="button" className="btn btn-dark">Add New Contact</button></Link>
      <div className='container'>
      <table className="table table-striped table-dark table-bordered">
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