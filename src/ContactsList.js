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
            <th scope="row"><img src="{c.image_url}"></img></th>
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