import { useParams, useHistory } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { useState } from 'react';

const ContactEdit = (props) => {
  const history = useHistory();
  const { id } = useParams();
  const { contacts } = props;
  const currentContact = contacts.filter(function (contact) {
    return contact.id === parseInt(id, 10);
  });
  const [clickedContact, setEdit] = useState(currentContact[0]);
  const { editContact } = props;

  const handleClick = () => {
    if (
      !clickedContact.avatarURL ||
      !clickedContact.fullname ||
      !clickedContact.email ||
      !clickedContact.phone
    ) {
      alert('Please fill out all fields');
    } else {
      editContact(clickedContact);
      history.push('/contacts');
    }
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8 self-align-center">
        <form className="contact-form">
          <div className="form-group">
            <p>Full Name</p>
            <input
              className="form-control"
              defaultValue={clickedContact.fullname}
              onChange={(event) => {
                const spread = { ...clickedContact };
                spread.fullname = event.target.value;
                setEdit(spread);
              }}
            />
            <br />
            <p>Email Address</p>
            <input
              className="form-control"
              defaultValue={clickedContact.phone}
              onChange={(event) => {
                const spread = { ...clickedContact };
                spread.phone = event.target.value;
                setEdit(spread);
              }}
            />

            <br />
            <p>Phone Number</p>
            <input
              className="form-control"
              defaultValue={clickedContact.email}
              onChange={(event) => {
                const spread = { ...clickedContact };
                spread.email = event.target.value;
                setEdit(spread);
              }}
            />
            <br />
            <p>Avatar URL</p>
            <input
              className="form-control"
              defaultValue={clickedContact.avatarURL}
              onChange={(event) => {
                const spread = { ...clickedContact };
                spread.avatarURL = event.target.value;
                setEdit(spread);
              }}
            />
            <br />

            <button
              type="button"
              className="btn btn-primary"
              onClick={handleClick}
            >
              Save Edit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

ContactEdit.propTypes = {
  contacts: PropTypes.array,
  editContact: PropTypes.func,
};

export default ContactEdit;
