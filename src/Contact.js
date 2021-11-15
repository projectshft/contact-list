import React from 'react';

const Contact = ({ props, contacts}) => {
  const id = props.match.params.index;
  const contact = contacts.find(c => c.id == id);
  console.log(contact);

  if (!contact) {
    return <div>Sorry, but the contact was not found.</div>
  }
  return (
   <div>
     <h1>hi!</h1>
     <h1>{contact.name}</h1>
     <img alt="contact" className="contact-image" src={contact.img}></img>
     {contact.phone} {contact.email}
   </div>
  )

}

export default Contact