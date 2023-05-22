import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Contact from './Contact';
import PropTypes from 'prop-types';

const ContactsList = ({contacts}) => {
  //navigate to individual contact page (ShowContact component) when a contact is clicked
  const navigate = useNavigate();
  const handleRowClick = (e) => {
    const contactId = e.currentTarget.id;
    navigate(`/contacts/${contactId}`);
  }

  return (
    <div>
      <h1 className='text-center'>Contacts List</h1>
      <table className='table offset-md-1 table-bordered table-hover' style={{"width" : "80%"}}>
        <thead>
          <tr>
            <th key="pic" scope='col' className=''>Profile Pic</th>
            <th key='name' scope='col' className=''>Name</th>
            <th key='email' scope='col' className=''>Email</th>
            <th key='phoneNumber' scope='col' className=''>Phone Number</th>
          </tr>
        </thead>
      
        {/* maps through contacts and displays each contact */}
        {contacts.map(contact => {
          return(
            <Contact contact={contact} handleRowClick={handleRowClick} />
          )
        })}

      </table>
    <Link to='/new' className='btn btn-primary offset-md-1'>Add Contact</Link>
  </div>
  )
};
//PropType for the contacts prop being passed in
ContactsList.propTypes = {
  contacts: PropTypes.array
}

export default ContactsList;