import React from 'react';
import ContactCreate from '../components/ContactCreate.js';

function NewContact({ onSubmit }) {
    return (
        <ContactCreate onSubmit={onSubmit} />
    );
}
export default NewContact;