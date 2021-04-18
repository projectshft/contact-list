import { Link } from 'react-router-dom';
import React, { useState } from 'react';

export default function Edit ({contactData, contacts}) {
  const [editContact, setEditContact] = useState(contactData)
  const backLink = '/contacts/' + contactData.id;


  const handleChange = (e) =>{
    const value = e.target.value;
    setEditContact({
      ...editContact,
      [e.target.name]: value
    })
    console.log(editContact);
  }

  const submitEditContact = () =>{
    const index = contacts.findIndex(item=> item === contactData)
    contacts.splice(index, 1, editContact)
  }

  return (
    <div>
          <div className='row'>
            <div className='offset-md-2 col-sm-6'>
              <table className='table table-dark'>
                <tbody>
                  <tr>
                    <th></th>
                    <td>
                    <img src={contactData.image_url} alt='' style={{maxWidth: '100%'}}></img>
                    </td>
                  </tr>
                  <tr>
                    <th>name</th>
                    <td>
                      <input
                      type='text'
                      name='name'
                      defaultValue={contactData.name}
                      onChange={handleChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>email</th>
                    <td>
                      <input
                      type='text'
                      name='name'
                      defaultValue={contactData.email}
                      onChange={handleChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>phone</th>
                    <td>
                      <input
                      type='text'
                      name='name'
                      defaultValue={contactData.phone_number}
                      onChange={handleChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>imageUrl</th>
                    <td>
                      <input
                      type='text'
                      name='name'
                      defaultValue={contactData.image_url}
                      onChange={handleChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th></th>
                    <td>
                      <Link to={backLink}>
                        <button onClick={submitEditContact} className = "btn-primary btn btn-sm">save edit</button>
                        <button className = "btn-warning btn btn-sm">back</button>
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
  );
}