
import { Link } from 'react-router-dom';
import Contact from './Contact';

const FullList = (prop) => {
  
  // const tester = () => {
  //   console.log(prop.contacts)
  // }

  const postContacts = prop.contacts.map((post, index) => {
    return (
      <Contact key={index} post={post}/>
    )
  })


  return (
    <div>
      <Link to="/add-contacts">Add Contact</Link>
      <h3>List goes under here</h3>
      <ul>
        {postContacts}
      </ul>
      {/* <button onClick={tester}>Test</button> */}
    </div>
    
  )

}

export default FullList