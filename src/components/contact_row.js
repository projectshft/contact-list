import React from "react";
import { useHistory } from 'react-router-dom';

const ContactRow = ({contact}) => {
  const history = useHistory();
  const contactInfoPage = () => {
    // const infoCard = () => (
      // <ContactInfo contact={contact}/>
    // )
    history.push(`/contacts/${contact.id}`)
    // console.log(contact);
  }
  return (

      <tr onClick={contactInfoPage}>
          <th><img className="img-thumbnail" src={contact.image_url} alt=""/></th>
          <td>{contact.name}</td>
          <td>{contact.email}</td>
          <td>{contact.phone_number}</td>
      </tr>
  )
}

export default ContactRow