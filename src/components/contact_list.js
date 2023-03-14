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
          </tbody>
        </table>
        <button type="button" className="btn btn-primary btn-list" onClick={addNewPage}>Add Contact</button>
      </div>
  )
};

export default ContactList;