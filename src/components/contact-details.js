import { useParams } from "react-router-dom";
import PropTypes from 'prop-types';

export default function ContactDetails({getContact}) {
    let params = useParams();
    let contact = getContact(parseInt(params.contactId));
    
    return (
      <div className="card col-5 mx-auto text-center mb-5" >
        <img className="card-img-top" src={contact.image_url}/>
        <div className="card-body">
          <h5 className="card-title">{contact.name}</h5>
          <p className="card-text">{contact.email}</p>
          <p className="card-text">{contact.phone_number}</p>
        </div>
      </div>
    );
  }

  ContactDetails.propTypes = {
    getContact: PropTypes.func
  }