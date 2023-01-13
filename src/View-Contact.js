import { Link } from "react-router-dom"

const ViewContact = ({contactId, contacts}) => {

  const contactArray = contacts.filter((contact) => {
    return contact.Id == contactId});

  const specificContact = contactArray[0]
  
  if(!specificContact) {
    return <div>
      <h1>Contact Does Not Exist</h1>
      <Link to={'/contacts'}>Contacts</Link>
    </div>
  }
  
  return (
    <div>
      <h3>{specificContact.name}</h3>
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