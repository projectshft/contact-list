import { Link, useRouteMatch } from 'react-router-dom'
const FullContact = ({contacts}) => (
  <div>
    <ul>
      {contacts.map(individual => (
        <li>
          <Link to={`/contacts/${individual.Id}`}>{individual.name}</Link>
        </li>
      ))}
    </ul>
    <button><Link to={'/contacts/new'}>Add Contact</Link></button>
  </div>
  
)

export default FullContact