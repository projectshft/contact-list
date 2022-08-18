import { Link } from 'react-router-dom'

const FullList = ({contacts}) => (
  <div>
    <ul>
      {
        contacts.map(c => (
          <li key={c.id}>
            <Link to={`/contacts/${c.id}`}>{c.name}</Link>
          </li>
        ))
      }
    </ul>
  <div>
    <button type="button"><Link to="/contacts/new">Add a New Contact</Link></button>
  </div>

  </div>

)

export default FullList