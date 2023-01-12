import { useParams, useRouteMatch, Link } from "react-router-dom"

const ViewContact = ({contactName, contacts}) => {

  const getContact = () => (
    contacts.find((c) => {
      return c.name === contactName;
    })
  )
  
  const specificContact = getContact();

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