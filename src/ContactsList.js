import React from 'react'
import Contact from './Contact';

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
          <h1>Contacts List</h1>
          <br/>
        </div>

        <div className="contacts">
        </div>

        <ContactsList contacts={contacts}  />
        <br/>

        <Link to="/new-contact/"><button type="button" className="btn btn-primary add-contact">Add Contact</button></Link>
      </div>
     <table style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid', 'width':'100%'}}>
      <tr>
      <td style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid', 'textAlign':'left'}}><b>Profile Pic</b></td>
      <td style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid', 'textAlign':'left'}}><b>Contact Name</b></td>
      <td style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid', 'textAlign':'left'}}><b>E-mail Address</b></td>
      <td style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid', 'textAlign':'left'}}><b>Phone Number</b></td>
      </tr>
      {contactItems}
    </table>
    </div>
  )
}

export default ContactsList


{/* <div className="row">
      <div className="col-md-6 offset-md-3">
        <div className="page-header">
          <br/>
          <h1>Contacts List</h1>
          <br/>
        </div>

        <div className="contacts">
        </div>

        <ContactsList contacts={contacts}  />
        <br/>

        <Link to="/new-contact/"><button type="button" className="btn btn-primary add-contact">Add Contact</button></Link>
      </div>
    </div> */}