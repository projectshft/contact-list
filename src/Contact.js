import { Link } from 'react-router-dom'
import React from 'react'



const Contact = ({contacts, contactId}) => {
   
const match =  contacts.find((element => element.contactId===contactId))

return (
    <div>
        <img src={`https://unsplash.com/photos/PK_t0Lrh7MM`}></img> 
      <h1>{match.name} ({match.number})</h1>
      <h2>Email: {match.email}</h2>
      <Link to='/'>Back</Link>
    </div>
  )
}

export default Contact