import React from "react";
import { Link } from "react-router-dom";

const ContactInfo = (props) => {
  const { id, name, email, phoneNumber, imageURL} = props.location.state.contact;
    return (
    <div className='main' >
      <div className="ui card centered">
        <div className="image">
          </div>
          <div className="content">
            <div className="id">{id}</div>
            <div className="header">{name}</div>
            <div className="description">{email}</div>
            <div className="phone">{phoneNumber}</div>
            <div className="imageURL">{imageURL}</div>
          </div>
        </div>
          <div className="center-div">
           <Link to='/'> <button className="ui button blue center">Back to Contacts</button> </Link>
          </div>
      </div>  
    );
};

export default ContactInfo;