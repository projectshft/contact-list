import { Link } from 'react-router-dom'

const FullList = ({contacts}) => (
  <div>
    <ul>
      {
        contacts.map(p => (
          <li key={p.number}>
            <Link to={`/contacts/${p.number}`}>{p.name}</Link>
          </li>
        ))
      }
    </ul>
  </div>
)

export default FullList