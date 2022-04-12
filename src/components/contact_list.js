import React from "react";
import { useLocation, useNavigate} from "react-router-dom";



const ContactList = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state;
 
  
  

  const renderContact = function () {
    if (state) {
      return (
        state.map((contact, index) => {
          return (
             <tr key={index} onClick={() => navigate(`/contacts/${index}`, {state: {contact}})}>
              <th><img src={contact.image} alt="contact"></img></th>
              <th>{contact.name}</th>
              <th>{contact.email}</th>
              <th>{contact.phone}</th>
            </tr>
          )
        })
      )
    }

    else {
      return (
        <tr><th>Click 'Add Contact' to add contacts!</th></tr> 
      )
    }
  }

  return (
    <tbody>
      {renderContact()}
    </tbody>
  )
}

export default ContactList