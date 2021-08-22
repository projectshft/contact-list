import { Link } from 'react-router-dom'


const ContactsList = ({contacts}) => {
  
  return (


  <div>
    <h1>contacts</h1>
    <a className="add-contact-link" href="/contacts/new">add a new contact here</a>

    <table class="table table-sm table-bordered table-hover">
      <thead>
        <tr>
          <th scope="col">Image</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Phone number</th>
        </tr>
      </thead>
      <tbody>
        {
        contacts.map(c => (
          <tr> 
            <td className="contact-image-column"><img className="contact-image" src={c.image_url} href={`/contacts/${c.id}`}></img></td>
            <a className="link" href={`/contacts/${c.id}`}>{c.name}</a>
            <td>{c.email}</td>
            <td>{c.phone_number}</td>
          
          </tr>
          
        ))
      }
      </tbody>
    </table>
  </div>
)
}


export default ContactsList