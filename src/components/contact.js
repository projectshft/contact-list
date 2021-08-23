import React from 'react';
//  import { Link } to link pages together in React
import { Link } from 'react-router-dom';


const Contact = (props) => {
  
  	const findContact = () => {
      console.log(props.contacts);
      console.log(props.match.params.id);
      //  parseInt added below to find the specific number of the contact's id (rather than its string)
      return props.contacts.find(contact => contact.id === parseInt(props.match.params.id, 10));
    }
    
    const renderContact = (contact) => {
      if (contact === undefined) {
        return (
          <>
          <Link to="/">Back to contact list</Link>
          <h1>Not found</h1>
          </>
        )
      }
      
      return (
        <>
        	<p>{contact.name}</p>
          <p>{contact.fullName}</p>
       		<p>{contact.emailAddress}</p>
          <p>{contact.phoneNumber}</p>
          <img src={contact.imageUrl} width={100} height={100} />
          <Link to="/">Back to contact list</Link> 
        </>
      )
        
    }

	return (
      renderContact(findContact())
    );
}

export default Contact;














// import React from 'react';

// //  props = { id, contacts }
// const Contact = (props) => {
//   const findContact = () => {
//     return props.contacts.find(contact => contacts.id === props.id); 
//   }

//   const renderContact = (contact) => {
//     if (contact === undefined) {
//       return (
//         <h1>Not Found</h1>
//       )
//     }
//   }
//   return (

//   );
// }

// export default Contact;