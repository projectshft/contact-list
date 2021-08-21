import { Link } from 'react-router-dom'


const ContactsList = ({contacts}) => (

  <div>
    <a href="/contacts/new">add a new contact here</a>
    {
    contacts.map(c => (
      <li key={c.id}>
        <Link to={`/${c.id}`}>{c.name}, {c.id}</Link>

      </li>    
      ))
    }

  </div>
)


export default ContactsList