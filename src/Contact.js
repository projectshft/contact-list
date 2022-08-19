import { Link } from 'react-router-dom'
import React from 'react'
import _ from 'lodash'

const Contact = ({contactId, contacts}) => {
  const contact = _.find(contacts, { id: contactId });

  if (!contact) {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
             <h1 className="display-4">Sorry, but the contact was not found</h1>
             <div>
                <button className="btn btn-lg btn-link btn-block">
                    <Link to='/contacts'>Back</Link>
                </button>
             </div>
             </div>
           </div>
  )}

  return (
    <div className="jumbotron jumbotron-fluid">
  <div className="container">
  <div className="col-md-4 col-sm-4">
    <img className="img-thumbnail rounded-circle" src={contact.imageURL}></img>
    </div>
    <h1 className="display-4">{contact.name}</h1>
    <p className="lead">Number: {contact.number}</p>
    <p className="lead">Email: {contact.email}</p>
  </div>
  <Link to='/contacts'>Back</Link>
</div>

  )
}

export default Contact