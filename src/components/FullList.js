
import { Link } from 'react-router-dom';
import Contact from './Contact';

const FullList = (p) => {
  
  const postContacts = p.contact.map((post, index) => {
    return (
      <Contact key={index} post={post} />
    )
  })
  
  return (
    <div>
      <Link to="/add-contacts">Add Contact</Link>
      <h3>List goes under here</h3>
      <ul>
        {postContacts}
      </ul>
    </div>
    
  )

}

export default FullList