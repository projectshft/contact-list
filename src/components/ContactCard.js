import React from "react";
import { Link } from "react-router-dom";

const ContactCard = (props) => {
    const { id, name, email, phoneNumber, imageURL} = props.contact;
    return (
    <div className="item">
      {/* <img className="ui avatar image" src={user} alt='user' /> */}
    <div className="content">
      <Link to={{pathname:`/contact/${id}`, state:{contact: props.contact}}}>
      <div className="header">{name}</div>
      <div>{email}</div>
      <div>{phoneNumber}</div>
      <div>{imageURL}</div>
      </Link>
        </div>
        <i className="trash alternate outline icon"></i>
        
    </div>
    );
};

export default ContactCard;