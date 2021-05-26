import { Link } from 'react-router-dom'
import React from 'react'


const ContactItem = ({contactId, contacts}) => {
  const contact = contacts.find((contactId) => {
    return console.log(contact);
  });

  return (
    <div>
      <h1>hello</h1>
    </div>
  )
}

export default ContactItem;