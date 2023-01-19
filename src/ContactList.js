import React from 'react'
import Contact from './Contact';

const ContactList = (props) => {
  const contactItems = props.contacts.map((contact, index) => {
    return (
      <Contact key={index} contact={contact} />
    )
  })

  return (
    <span>{contactItems}</span>
  )
}

export default ContactList;