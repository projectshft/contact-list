import React from 'react'
import Contact from './Contact';
import { Link } from 'react-router-dom';

const ContactsList = (props) => {
  const contactItems = props.contacts.map((contact, index) => {
    return (
      <Contact key={index} index={index} contact={contact}/>
    )
  })

  return (
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <div className="page-header">
          <br/>
          <h1>Contact List</h1>
          <br/>
        </div>

        <div className="contacts">
        </div>

        <Link to="/new-contact/"><button type="button" className="btn btn-primary add-contact">Add Contact</button></Link>
        <br/><br/>
        <table class="table table-striped table-dark table-hover" >
          <thead>
            <tr>
              <th scope="col" style={{'textAlign':'center'}}><b>Profile Pic</b></th>
              <th scope="col" style={{'textAlign':'center'}}><b>Contact Name</b></th>
              <th scope="col" style={{'textAlign':'center'}}><b>E-mail Address</b></th>
              <th scope="col" style={{'textAlign':'center'}}><b>Phone Number</b></th>
            </tr>
          </thead>
          <tbody>
            {contactItems}
          </tbody>
        </table>
      </div>
     
    </div>
  )
}

export default ContactsList