import React from 'react'
import Contact from './Contact';

const ContactsList = (props) => {
  const contactItems = props.contacts.map((contact, index) => {
    return (
      <Contact key={index} index={index} contact={contact}/>
    )
  })

  return (
    <table className='col list-group' style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid', 'verticalAlign':'middle'}}>
      {contactItems}
    </table>
  )
}

export default ContactsList