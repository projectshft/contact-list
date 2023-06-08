import React from 'react';
import PropTypes from 'prop-types';
import { useParams, Link } from 'react-router-dom';


const Contact = ({ contacts }) => {
 const { id } = useParams();
 const contact = contacts.find((c) => c.id === parseInt(id, 10));
return (

  <div className='container'>
  <div className="card">
    <img 
      src={contact.ImageUrl}
      alt="contact info"
    />
    <div className="card-body">
      <h5 className="card-title">{contact.name}</h5>
      <h6 className="card-subtitle mb-2 text-muted">Email: {contact.email}</h6>
      <p className="card-text">Phone Number: {contact.phoneNumber}</p>
    </div>
    <div className="card-footer">
      <Link to="/" className="btn btn-primary"> Back to Contact List
      </Link>
    </div>
  </div>
  </div>
  )
  }


  Contact.propTypes = {
    contacts: PropTypes.array.isRequired,
  };

  export default Contact;