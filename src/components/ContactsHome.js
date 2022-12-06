import { Link } from 'react-router-dom'
//4 columns using bootstrap and a button for adding contact

const ContactsHome = ({contacts}) => {
  
  return(
    <div>
      <ul>
        {
          contacts.map(c => (
            <li key={c.id}>
              <Link to={`/contact/${c.id}`}>{c.name}</Link>
            </li>
            )
          )
        }
        <li><Link to='/AddContactForm'>Add New Contact</Link></li>
      </ul>
    </div>
  )
}

export default ContactsHome;