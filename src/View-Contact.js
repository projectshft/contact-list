import { useEffect } from "react";
import { useMemo, Link } from "react-router-dom"

const ViewContact = ({contactId, contacts}) => {

  const contactArray = contacts.filter((contact) => {
    return contact.Id == contactId});

  const specificContact = contactArray[0]
  
  return (
    <div>
      <h6>{specificContact.name}</h6>
      <br/>
      <div>{specificContact.image}</div>
      <br/>
      <div>{specificContact.email}</div>
      <br/>
      <div>{specificContact.phoneNumber}</div>
      <Link to={'/contacts'}>Contacts</Link>
    </div>
  )
  
}


export default ViewContact