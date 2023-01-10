import React from 'react';
import { Image } from 'react-bootstrap'


const ContactList = ({ contacts }) => {
  
  return ( 
    <tbody className="class-list">{contacts.map((contact) => (
      <tr className="align-middle" key={contact.id} style={{height: 100}}>
        <td className='text-center'><Image height={175} roundedCircle src={ contact.image_url } alt={ contact.name } /></td>
        <td>{ contact.name }</td>
        <td>{ contact.email }</td>
        <td>{ contact.phone }</td>
      </tr>
    ))}
    </tbody>
   );
}
 
export default ContactList;