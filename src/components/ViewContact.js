import React from 'react';
import { useParams, Link } from 'react-router-dom';
// import { useEffect } from 'react/cjs/react.production.min';

const ViewContact = (props) => {
  const currentId = parseInt(useParams().id);
  const contact = props.contacts.find(x => x.id === currentId);
    return (
      <div className="mx-auto text-center contact-div">
        <img id="view-img" width="700" src={contact.img_url} alt="profile pic here"/>
        <h1>
          <strong>{contact.name}</strong>
        </h1>
        <h2>Email: {contact.email}</h2>
        <h2>Phone Number: {contact.phone}</h2>
        <Link to="/contacts" className='btn-primary'><button>Back</button></Link>
      </div>
    );
}

export default ViewContact;