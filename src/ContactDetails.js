import { Link, useParams } from "react-router-dom";
import PropTypes from 'prop-types';

const ContactDetails = ({contacts}) => {
  const {id} = useParams();
  const contact = contacts.find((contact) => contact.id === Number(id));
  // error logic for if contact doesn't exist in contacts array
  if (!contact) {
    return <div className='text-center'>
       <h2>Error: That contact does not exist in your contact list</h2>
    </div>;
  }

  // displays single contact out of contacts array
  return (
    <div className='container text-center contact-details'>
      <h1 className='mt-4 mb-4'>Contact List</h1>
      <div className='row border border-dark rounded'>
        <div className='col-3 mx-auto p-0'>
          <img className='img-fluid' src={contact.profilePicture} alt='profile'/>
        </div>
        <div className="row mx-auto">
          <div className="col mt-3">
            <h2><strong>Name: </strong>{contact.name}</h2>
            <h2><strong>Email: </strong>{contact.email}</h2>
            <h2><strong>Phone: </strong>{contact.phoneNumber}</h2>
            <Link to='/' className='btn btn-danger mt-2'>Back</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// propTypes check
ContactDetails.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default ContactDetails;