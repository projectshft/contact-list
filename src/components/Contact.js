import { Link, useHistory } from "react-router-dom";
import React from "react"
import _ from "lodash"
import PropTypes from "prop-types";

//function component which returns and displays individual contact information from state depending on the route parameter id 
const Contact = ({contactID, contacts}) => {
  const history = useHistory();
  //lodash used to find and return object that's inside of another object by searcing for a specific contactID.
  const contact = _.find(contacts, {id: contactID})
  if (!contact) {
    return (
      <div>
        <h2>Contact not found</h2>
        <Link to="/">Back</Link>
      </div>
    )
  }
  
  return(
    <div>
    <br></br>
    <div className="card">
      <img src={contact.image_url} className="card-img-top" alt="headshot"/>
      <div className="card-body">
        <h5 className="card-title">{contact.name}</h5>
        <p className="card-text">Number: {contact.phone_number}</p>
        <p className="card-text">Email: {contact.email}</p>
      </div>
      <button onClick={() => history.push("/")} className="btn btn-secondary">Back</button>
    </div>
    </div>
  )
}

Contact.propTypes = {
  contacts: PropTypes.array.isRequired,
  contactID: PropTypes.number.isRequired 
}


export default Contact;