import React from 'react';
import Contact from './Contact';

const ContactsList = (props) => {

  const contactItems = props.contacts.map((contact, index) => {
    return (
      <Contact key={index} contact={contact} />
    )
  })
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Profile Picture</th>
          <th>Name</th>
          <th>Phone Number</th>
          <th>Email Address</th>

        </tr>
      </thead>
      <tbody>
        {contactItems}
      </tbody>
    </table>
  )


  // return (
  //   <ul className='col-md-4 list-group'>
  //     {contactItems}
  //   </ul>
  // )
}

export default ContactsList