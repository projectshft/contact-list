
import { Link } from 'react-router-dom';
import Contact from './Contact';

const FullList = (prop) => {


  const tester = () => {
    console.log(prop.contacts[0].email.email)
  }

  const postContacts = prop.contacts.map((post, index) => {
    return (
      <Contact key={index} post={post}/>
    )
  })

  return (
    <div>
      <Link to="/add-contacts">Add Contact</Link>
      <h3>List goes under here</h3>
      <ul className="col-md-4 list-group">
        {postContacts}
      </ul>
      <button type="button" onClick={tester}>console test</button>
    </div>
    
  )

}

export default FullList