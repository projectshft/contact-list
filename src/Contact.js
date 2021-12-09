import React from 'react';
import { useNavigate } from 'react-router-dom'

const Contact = ({contact, index}) => {
  const navigate = useNavigate();
  function handleClick(){
    navigate('/contact-detail/'+ index);
  }

  return (
    
    <tr onClick={handleClick}>
      <td scope="col" style={{'textAlign':'center'}}><img width="96" height="96" src={contact.imageUrl} /></td>
      <td scope="col" style={{'textAlign':'center'}}>{contact.contactName}</td>
      <td scope="col" style={{'textAlign':'center'}}>{contact.emailAddress}</td>
      <td scope="col" style={{'textAlign':'center'}}>{contact.phoneNumber}</td>
    </tr>
     
    
  )
}

export default Contact
