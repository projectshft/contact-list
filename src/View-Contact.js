import { useEffect } from "react";
import { useMemo, Link } from "react-router-dom"

const ViewContact = ({contactId, contacts}) => {

  const contactArray = contacts.filter((contact) => {
    return contact.Id == contactId});

  const specificContact = contactArray[0]
  console.log(specificContact)
  
  return (
    <div>
      <h6>{specificContact.name}</h6>
      <img src={`${specificContact.image}`}/>
      <br/>
      <div>{specificContact.email}</div>
      <br/>
      <div>{specificContact.phoneNumber}</div>
      <Link to={'/contacts'}>Contacts</Link>
    </div>
  )
  
}


export default ViewContact