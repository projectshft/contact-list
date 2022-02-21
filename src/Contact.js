import { Link } from 'react-router-dom';
import { useParams } from 'react';
import React from 'react';
import _ from 'lodash';

const Contact = ({contactId, contacts}) => {
  const contact = _.find(contacts, { name: contactId });

  if (!contact) {
    return <div>Contact not found</div>;
  }
  return (       
          <div className="col-md-5 offset-md-3">
            <div className="card text-white bg-dark mb-3 h-100">
              <img className="card-img" src={contact.img_url}  
              alt="Contact Avatar"/>
              <div className="card-img-overlay text-center h-100 d-flex flex-column         
                  justify-content-end">
                  <h3 className="card-title">{contact.name}</h3>
                  <p className="card-text"><strong><i className="fa fa-envelope"></i>  </strong>{contact.email}</p>
                  <p className="card-text"><strong><i className="fa fa-phone"></i>  </strong>{contact.phone}</p>
                  <Link className=" btn btn-warning btn-sm"
                    role="button"
                    to={'/'}>
                      Back to contacts
                  </Link>
                </div>
                </div>
              </div>              
  );
};

export default Contact
