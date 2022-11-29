import React from 'react';
import { Link, withRouter } from 'react-router-dom';

// also takes contacts and history from App.js to run 
const ContactList = ({contacts, history}) => {

  return (  
    <div id='listed'>

      <Link to='/newcontact' id='primary'> <button className='btn btn-primary'>Create new contact</button></Link>

      <table className="table table-dark" id='table'>
        <thead className="thead-dark">
          <tr>
            <th scope="col">Profile Pic</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone Number</th>
          </tr>
        </thead>

        <tbody>
          {contacts.map((c, index) => (
            <tr key={index} onClick={()=>
              history.push(`/contacts/${index}`)}>

              <td><img src={c.image_url} alt='{c.name}'/></td>
              <td>{c.name}</td>
              <td>{c.email}</td>
              <td>{c.phone_number}</td>
              
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  ) 
};

export default withRouter (ContactList);