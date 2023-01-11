import React from 'react';
import { Image } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';


const ContactList = ({ contacts }) => {
  
  return ( 
    <tbody className="class-list">{contacts.map((contact) => (
      <React.Fragment key={contact.id} >
        <LinkContainer to={ `/contacts/${contact.id}` }>
          <tr className="align-middle" style={{height: 100}}>
            <td className='text-center'><Image height={175} roundedCircle src={ contact.image_url } alt={ contact.name } /></td>
            <td>{ contact.name }</td>
            <td>{ contact.email }</td>
            <td>{ contact.phone }</td>
          </tr>
        </LinkContainer>
      </React.Fragment>
    ))}
    </tbody>
   );
}
 
export default ContactList;