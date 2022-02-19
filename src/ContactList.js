import React from 'react';

const ContactList = (props) => { 

  
  
  return (
    <div className="col-md-9 offset-md-1">
      <button className="btn btn-primary"  >Add Contact</button>
      <div className="row">
        <table className="table table-hover table-bordered">
          <thead>
            <tr>
              <th scope="col">Prof Pic</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {
              props.contacts.map(c => {
                return (
                  <tr key={c.id}>
                    <td className="w-25"><img src={c.image_url} alt="prof pic"/></td>
                    <td>{c.name}</td>
                    <td>{c.email}</td>
                    <td>{c.phone}</td>
                  </tr>  
                )
              })

            }
          </tbody>    
        </table>
      </div>
    </div>
  )

}

export default ContactList;