import { Link } from 'react-router-dom'
import React from 'react'


const Contact = ({contacts, contactId}) => {
   
const match =  contacts.find((element => element.contactId===contactId))

return (
    <div>
        <img src={match.img}></img> 
      <h1>{match.name} </h1>
      <h2>Phone Number: {match.number}</h2>
      <h2>Email: {match.email}</h2>
      <Link to='/'>Back</Link>
    </div>
  )
}

export default Contact