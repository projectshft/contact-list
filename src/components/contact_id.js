import React from 'react';
import PropTypes from 'prop-types';
import { useParams, Link } from 'react-router-dom';


const Contact = ({ contacts }) => {
 const { id } = useParams();
 const contact = contacts.find((c) => c.id === parseInt(id, 10));
return (

  <div className='container'>
  <div class="card">
    <img 
      src={contact.imageUrl}
      alt="new"
    />
    <div class="card-body">
      <h5 class="card-title">{contact.name}</h5>
      <h6 class="card-subtitle mb-2 text-muted">Email: {contact.name}</h6>
      <p class="card-text">Phone Number: {contact.name}</p>
    </div>
    <div className="card-footer">
      <Link to="contacts" className="btn btn-primary"> Back to Contact List
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