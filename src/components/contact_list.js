import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';

const ContactList = (props) => {
  const navigate = useNavigate();
  
  const renderContact = function () {
    if (props.state) {
      return (
        props.state.map((contact) => {
          return (
             <tr key={contact.id} onClick={() => navigate(`/contacts/${contact.id}`, {state: {contact}})}>
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

ContactList.propTypes = {
  props: PropTypes.object
}

export default ContactList