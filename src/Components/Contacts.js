import React from 'react';
import { Link } from 'react-router-dom';


const Contacts = (props) => (
    <div>
        <ul>
            {
                props.contactList.map(contact => (
                    <li key={contact.id}>
                        <Link to={`contacts/${contact.id}`}>{contact.name}</Link>
                    </li>
                ))
            }
        </ul>
    </div>
);


export default Contacts;