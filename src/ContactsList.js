import { Link } from 'react-router-dom'


const ContactsList = ({contacts}) => (

  <div>
    <a href="/contacts/new">add a new contact here</a>
    <table class="table table-bordered">
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
            <td><img className="contact-image" src={c.image_url}></img></td>
            <td>{c.name}</td>
            <td>{c.email}</td>
            <td>{c.phone_number}</td>
          </tr>
          
        ))
      }
        
      </tbody>

      
      
    </table>
    

  </div>
)


export default ContactsList