import React from 'react';

const Contact = ({contactList, contactId}) => {
    //find specific contact object matching the id passed in through props   
    const contact = contactList.find((c) => c.id === contactId);

    return (
        <div>
            <h1>{contact.name}</h1>
            <h3>{contact.email}</h3>
            <h3>{contact.phone_number}</h3>
        </div>
    )
};

//can maybe use proptypes here to set up a default image?

export default Contact;