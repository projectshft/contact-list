import {useState} from 'react';
import {Link} from 'react-router-dom';
import _ from 'lodash';
import submitForm from './SubmitForm';

// Form for editing a contact
const EditForm = ({contacts, contactId, editContact, history}) => {
  const contact = _.find(contacts, {id: contactId});

  const [name, setName] = useState(contact.name);
  const [email, setEmail] = useState(contact.email);
  const [number, setNumber] = useState(contact.number);
  const [imgUrl, setImgUrl] = useState(contact.imgUrl);

  if (!contact)
    return <h1>Contact not found</h1> 

  const handleClick = () => {
    const editedContact = submitForm(name, email, number, imgUrl);
    
    if (editedContact) {
      editContact(contactId, editedContact)
      history.push(`/contacts/${contactId}`);
    } 
  }

  return (
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <form className="contact-form">
          <h2>Edit {contact.name}'s information:</h2>

          <div className="form-group">
            <input
              className="form-control"
              defaultValue={contact.name}
              onChange={e => setName(e.target.value)}
            />
            <br/>

            <input
              className="form-control"
              defaultValue={contact.email}
              onChange={e => setEmail(e.target.value)}
            />
            <br/>

            <input
              className="form-control"
              defaultValue={contact.number}
              onChange={e => setNumber(e.target.value)}
            />
            <br/>

            <input
              className="form-control"
              defaultValue={contact.imgUrl}
              onChange={e => setImgUrl(e.target.value)}
            />
            <br/>
          </div>

          <button type="button" className="btn btn-primary add-contact-btn" onClick={handleClick}>Save Edit</button>
          <Link to={`/contacts/${contactId}`} className="button btn btn-primary">Back</Link>
        </form>   
      </div> 
    </div>   
  );
}

export default EditForm;