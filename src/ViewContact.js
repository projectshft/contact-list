import _ from 'lodash';
import {Link} from 'react-router-dom';

function ViewContact({contactId, contacts}) {
  const contact = _.find(contacts, {id: contactId});

  if (!contact)
    return <h1>Contact not found</h1>

  const handleEditClick = () => {
    console.log('edit');
  }

  const handleDeleteClick = () => {
    console.log('delete');
  }

  return (
    <div className="row center">
      <div className="col-md-6 offset-md-3 contact">
        <h2>{contact.name}</h2>

        <img className="contact-view-img" src={contact.imgUrl} alt="Image not found"></img>
        <p>{contact.email}</p>
        <p>{contact.number}</p>
        
        <Link to={'/contacts'} className="button btn btn-primary">Back</Link>

        <button type="button" className="btn btn-primary edit-contact-btn" onClick={handleEditClick}>Edit</button>
        <button type="button" className="btn btn-primary delete-contact-btn" onClick={handleDeleteClick}>Delete</button>
      </div>
    </div>
  )
}

export default ViewContact;