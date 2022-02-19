import React from 'react';
import { useParams, Link } from 'react-router-dom';
import _ from 'lodash'

const Contact = ({contacts}) => {
  
  let params = useParams(); 
  const contact = _.find(contacts, { id: parseInt(params.id, 10)});
  
  if (!contact) {
    return (
      <div>
        <p>Sorry, but the contact was not found</p>
        <Link to='/'>Back</Link>
      </div>
      
    )
  }
  
  return (
    <div>
      <h1>{contact.name}</h1>
      <Link to='/'>Back</Link>
    </div>
  )
}

export default Contact