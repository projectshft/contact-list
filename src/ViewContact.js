import _ from 'lodash';
import {Link} from 'react-router-dom';

function ViewContact({contactId, contacts}) {
  const contact = _.find(contacts, {id: contactId});

  if (!contact)
    return <h1>Contact not found</h1>

  return (
    <div className="row center">
      <div className="col-md-6 offset-md-3 contact">
        <h2>{contact.name}</h2>

        <img className="contact-view-img" src={contact.imgUrl}></img>
        <p>{contact.email}</p>
        <p>{contact.number}</p>
        
        <Link to={'/contacts'} className="button btn btn-primary">Back</Link>
      </div>
    </div>
  )
}

export default ViewContact;