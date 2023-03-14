import React from "react";
import { useHistory } from 'react-router-dom';
import _ from "lodash";

const ContactInfo = ({contactID, contacts}) => {
  const card = _.find(contacts, { id: contactID });
  const history = useHistory();
  const toContactList = () => {
    history.push("/contacts")
  };

  console.log(card);
  return (
    <div className="card">
      <img src={card.image_url} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{card.name}</h5>
        <p className="card-text">{card.email}</p>
        <p className="card-text">{card.phone_number}</p>
        <button type="button" className="btn btn-primary btn-list" onClick={toContactList}>Back</button>
      </div>
    </div>
  )
  }

export default ContactInfo;