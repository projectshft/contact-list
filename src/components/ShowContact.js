import React from "react"
import { Link, useLocation, matchPath } from 'react-router-dom';
import PropTypes from 'prop-types';

const ShowContact = ({contacts}) => {
  //matching id of the path to id of the contact object that was clicked so the correct individual contact is shown. 
  //There seems like there could be an easier way to do this?
  const location = useLocation();
  const path = matchPath("/contacts/:id", location.pathname);
  const pathId = parseInt(path.params.id);
  const contact = contacts.find(obj => obj.id === pathId);

  return (
    <div>
      <h1 className="text-center">Contact</h1>
      <br />
      <div className='col-md-2 offset-md-5 border'>
        <img src={contact.imageUrl} className='col-md-12' alt=""/>
        <div className='text-center'>
          <h4><strong>{contact.fullName}</strong></h4>
          <div>{contact.email}</div>
          <div><strong>{contact.phoneNumber}</strong></div>
        </div>
      </div>
      <Link to='/' className='btn btn-primary offset-md-5'>Back</Link>
    </div>
  )
};

ShowContact.propTypes = {
  contact: PropTypes.object,
}

export default ShowContact;