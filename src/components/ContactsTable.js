import { Link } from 'react-router-dom';

export default function ContactsTable({contacts}) {
  
  const renderedContacts = contacts.map((contact)=>{
      const imageUrl = contact.image_url;
      const linkUrl = '/contacts/' + contact.id;

      return(
        <tr key ={contact.id}>
          <th scope="row"><img src={imageUrl} width={150} alt=''></img></th>
          <td>{contact.name}</td>
          <td>{contact.email}</td>
          <td>{contact.phone_number}</td>
          <td>
            <Link to={linkUrl}>
              <button data-select= {contact.id} className = "btn-primary btn btn-sm">view</button>
            </Link>
          </td>
        </tr>
      )
    });

  return (
    <div>
      <hr></hr>
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">Pic</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            
          </tr>
        </thead>
        <tbody>
          {renderedContacts}
        </tbody>
      </table>
    </div>
    
  );
}