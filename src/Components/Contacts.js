import React from 'react';

const Contacts = (props) => (
    <div>
        <ul>
            {
                props.contactList.map(contact => (
                    <li key={contact.id}>
                        {contact.name}
                    </li>
                ))
            }
        </ul>
    </div>
);

export default Contacts;