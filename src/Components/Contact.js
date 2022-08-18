import React from 'react';

const Contact = ({contactList, contactId}) => {   
    const contact = contactList.find((c) => c.id === contactId);

    return (
        <div>
            <h1>{contact.name}</h1>
            <h3>{contact.email}</h3>
            <h3>{contact.phone_number}</h3>
        </div>
    )
};

export default Contact;