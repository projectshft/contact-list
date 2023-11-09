//view contact profile for each person showing name, email, etc.
//have a way back that returns to './contactlist (i'll use Link)

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import _ from 'lodash' 

function ContactInfo ({ contacts, id }) {
    const index = parseInt(id, 10);
    const contact = _.find(contacts,{id: parseInt(id)});

    if (!contact) {
        return <div>Could not find this contact</div>;
    };
    //have a statement stating if the contact clicked is not found (which shouldn't happen if everything is working well)

    return (//return the template to display the contact's info within
        <div className='contact-card align-items-center justify-content-center'>
            <div className='card-row'>
            <ul> 
                <li><img src={contact.photo_url} width={95} height={125} alt='Contact lost their face in a freak gasoline fight accident' /></li>
                <li>Name: {contact.name}</li>
                <li>Email: {contact.email}</li>
                <li>Number: {contact.phone_number}</li>
                <li>ID: {contact.id}</li>
            </ul>
            </div>
            <div className='link-row'>
            {/* add a link back to contactlist */}
            <Link to='/contactlist'>Return to Contact List</Link> 
            </div>
        </div>
    );
}

ContactInfo.propTypes = {
    contacts:
    PropTypes.arrayOf(PropTypes.object).isRequired,
    id: PropTypes.string.isRequired,
};

export default ContactInfo