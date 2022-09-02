import data from './ContactInfo.json'
// import props from '../pages/AddContact.js'


var contacts = data.contacts;
// console.log(contacts);

const RenderContacts = (props) => (
  <tbody>
       {contacts.map((contact, index) => {
      return (
    <tr key={index} className="contacts-template">
      <td><img style={{height: '200px', width: '300px'}} src={contact.img_url} alt='portrait'/></td> 
    <td>{contact.contact_name}</td>
     <td>{contact.email}</td>
     <td>{contact.phone_number}</td>
   </tr>
      )
  })
    }
    </tbody>

 );

 export default RenderContacts