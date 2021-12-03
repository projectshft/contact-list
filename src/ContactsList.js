import React from 'react'
import Contact from './Contact';

const ContactsList = (props) => {
  const contactItems = props.contacts.map((contact, index) => {
    return (
      <Contact key={index} index={index} contact={contact}/>
    )
  })

  return (
    <table style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid', 'width':'100%'}}>
      <tr>
      <td style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid', 'textAlign':'left'}}><b>Profile Pic</b></td>
      <td style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid', 'textAlign':'left'}}><b>Contact Name</b></td>
      <td style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid', 'textAlign':'left'}}><b>E-mail Address</b></td>
      <td style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid', 'textAlign':'left'}}><b>Phone Number</b></td>
    </tr>
      {contactItems}
    </table>
  )
}

export default ContactsList