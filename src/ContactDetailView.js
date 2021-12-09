import React from 'react';
import { Link, useParams } from 'react-router-dom';


function ContactDetailView ({contacts}) {
  const params = useParams()
  const contact = contacts[params.index]
  
    return (

    <div className="row">
      <div className="col-md-4 offset-md-4">
        <br/>
        <h1>Contact List</h1>
        <br/>
        <table border='1px' border-color='grey' align='center'>
          <tr style={{'textAlign':'center'}}><img width="250" height="250" src={contact.imageUrl} /></tr>
          <tr style={{'textAlign':'center'}}><br/><b>{contact.contactName}</b><br/><br/>{contact.emailAddress}<br/><br/>{contact.phoneNumber}<br/><br/></tr>
          <tr style={{'textAlign':'center'}}></tr>
        </table>
        <br/>
        <center><Link to="/"><button type="button" className="btn btn-primary back-button">Back</button></Link></center>
        
      </div>
    </div>    
  )
}

export default ContactDetailView


