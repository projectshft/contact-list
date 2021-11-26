
import { Link } from 'react-router-dom';
import Contact from './Contact';

const FullList = (prop) => {

  const postContacts = prop.contacts.map((post, index) => {
    return (
      <Contact key={index} post={post}/>
    )
  })

  return (
    <div>
      <Link type="button" className="btn btn-primary" to="/add-contacts">Add Contact</Link>
      <ul className="col-md-4 list-group">
        {postContacts}
      </ul>
    </div>
    
  )

}

export default FullList