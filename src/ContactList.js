import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Modal } from "./DeleteModal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark} from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';


const ContactList = (props) => { 

  let navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [currId, setCurrId] = useState('');
  
  const openModal = () => {
    setShowModal(true);
  };
  
  const handleContactClick = (id, event) => {
    
    setCurrId(id);
    if(event.target.classList.contains('remove-contact') || event.target.parentElement.classList.contains('remove-contact')) {
      openModal();
    } else if (event.target.classList.contains('edit-contact') || event.target.parentElement.classList.contains('edit-contact')) {
      navigate(`/contacts/${id}/edit`)
    }
    else {
      navigate(`/contacts/${id}`)
    }
  }


  return (
    <div className="contact-list col-md-9 offset-md-1">
      {showModal ? <Modal setShowModal={setShowModal} currId={currId} removeContact={props.removeContact}/> : null}
      <Link to="/contacts/new">
        <button className="btn btn-primary add-contact-btn">Add Contact</button>
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
                        <span className="remove-contact"><FontAwesomeIcon icon={faXmark} className="remove-contact"/></span>
                        <span className="edit-contact"><FontAwesomeIcon icon={faPenToSquare} className="edit-contact"/></span>    
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