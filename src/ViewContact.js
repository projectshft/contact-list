import _ from 'lodash';
import {Link} from 'react-router-dom';

// Component to render a single contact
function ViewContact({contactId, contacts, deleteContact, history}) {
  const contact = _.find(contacts, {id: contactId});

  if (!contact)
    return <h1>Contact not found</h1>

  const handleDeleteClick = () => {
    if (window.confirm('Are you sure you want to delete this contact?')) {
      deleteContact(contactId);
      history.push('/contacts')
    }
  }

  return (
    <div className="row center">
      <div className="col-md-6 offset-md-3 contact">
        <h2>{contact.name}</h2>

        <img src={contact.imgUrl} className="contact-view-img" alt="Image not found"></img>
        <p>{contact.email}</p>
        <p>{contact.number}</p>
        
        <Link to={'/contacts'} className="button btn btn-primary">Back</Link>

        <Link to={`/contacts/${contactId}/edit`} className="button btn btn-primary">Edit</Link>
        <button type="button" className="btn btn-primary delete-contact-btn" onClick={handleDeleteClick}>Delete</button>
      </div>
    </div>
  )
}

export default ViewContact;