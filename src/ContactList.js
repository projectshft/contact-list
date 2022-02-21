import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark} from '@fortawesome/free-solid-svg-icons';
//import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';


const ContactList = (props) => { 

  let navigate = useNavigate();
  
  const handleContactClick = (id, event) => {
    if(event.target.classList.contains('remove-contact') || event.target.parentElement.classList.contains('remove-contact')) {
      props.removeContact(id);
    } else {
      navigate(`/contacts/${id}`)
  }
  }

  return (
    <div className="col-md-9 offset-md-1">
      <Link to="/contacts/new">
        <button className="btn btn-primary">Add Contact</button>
      </Link>
      
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
                  
                  <tr key={c.id} onClick={(e) => handleContactClick(c.id, e)}>
                    <td className="w-25"><img src={c.image_url} alt="prof pic"/></td>
                    <td>
                      {c.name}
                      <br />
                      <div className="icons">
                        <div className="remove-contact"><FontAwesomeIcon icon={faXmark} className="remove-contact"/></div>
                        {/* <FontAwesomeIcon icon={faPenToSquare}/> */}
                        
                      </div>
                    </td>
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