import { BrowserRouter, Switch, Route, Link, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

const ContactId = (props) => {
  const passedContacts = props.passFromMain;
  const grabIdParam = props.match.params.id;

  const getContact = (compareId) => {
    const isContact = (p) => p.id === compareId;
    return passedContacts.find(isContact);
  }

  const clickedContact = getContact(parseInt(grabIdParam,10));

  if (!clickedContact) {
    return <div class="text-center">
      <img src="https://static.vecteezy.com/system/resources/thumbnails/000/378/201/small/Emoji__282_29.jpg" alt=""></img>
      <br></br>
      Sorry, that contact was not found.
      <br></br>
      <Link to="/" type="button" className="btn btn-danger">Back</Link>
      </div>
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-4 offset-md-4">
            <div className="col border">
              <img src={clickedContact.image_url} className="selected-prof-pic rounded mx-auto d-block" alt=""></img>
              <h4 className="text-center">{clickedContact.name}</h4>
              <p className="text-center fs-5 selected-p">{clickedContact.email}</p>
              <p className="text-center fs-5 selected-p">{clickedContact.phone_number}</p>
            </div>
            <Link to="/" type="button" className="btn btn-danger">Back</Link>
          </div>
        </div>
      </div>
    </div>
  )  
};

ContactId.propTypes = {
  passFromMain: PropTypes.arrayOf(PropTypes.object).isRequired,
  match: PropTypes.object.isRequired
};

export default ContactId