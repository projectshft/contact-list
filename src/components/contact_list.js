import React from 'react'
import { useHistory } from 'react-router-dom';
import ContactRow from './contact_row';


const ContactList = (props) => {
  const history = useHistory();
  const contactRows = props.contacts.map((contact, index) => {
    return (
        <ContactRow key={contact.id} index={index} contact={contact} />

    )
  })

  const addNewPage = () => {
    history.push("/contacts/new")
  }

  return (
      /*<h1>List of Contacts</h1>*/
      <div className="container-fluid">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>Profile Pic</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {contactRows}
            {/* <tr>
              <th><img className="img-thumbnail" src={contacts.image_url} alt=""/></th>
              <td>{contacts.name}</td>
              <td>{contacts.email}</td>
              <td>{contacts.phone_number}</td>
            </tr>
            <tr>
              <th><img className="img-thumbnail" src={contacts.image_url} alt=""/></th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th><img className="img-thumbnail" src={contacts.image_url} alt=""/></th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr> */}
          </tbody>
        </table>
        <button type="button" className="btn btn-primary btn-list" onClick={addNewPage}>Add Contact</button>
      </div>
  )
};

export default ContactList;