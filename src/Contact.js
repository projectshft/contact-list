import React from 'react';

const Contact = ({contact, index}) => {
 
  return (
    <tr>
      <td style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid', 'textAlign':'center'}}><img width="96" height="96" src={contact.imageUrl} /></td>
      <td style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid', 'textAlign':'center'}}>{contact.contactName}</td>
      <td style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid', 'textAlign':'center'}}>{contact.emailAddress}</td>
      <td style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid', 'textAlign':'center'}}>{contact.phoneNumber}</td>
    </tr>
  )
}

export default Contact
