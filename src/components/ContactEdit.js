import { useParams, useHistory } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { useState } from 'react';

const ContactEdit = (props) => {
  const history = useHistory();
  const { id } = useParams();
  const { contacts } = props;
  /* returns the clicked contact by matching its id to that of the current url */
  const currentContact = contacts.find(function (contact) {
    return contact.id === parseInt(id, 10);
  });

  const [clickedContact, setEdit] = useState(currentContact);

  /* alerts for empty fileds, calls editContact on the edited contact and navigates to /contacts */
  const { editContact } = props;
  const handleSaveEditClick = () => {
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
  /*  destructured spread of other values */
  const editContactValues = { ...clickedContact };
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
                editContactValues.fullname = event.target.value;
                setEdit(editContactValues);
              }}
            />
            <br />
            <p>Email Address</p>
            <input
              className="form-control"
              defaultValue={clickedContact.phone}
              onChange={(event) => {
                editContactValues.phone = event.target.value;
                setEdit(editContactValues);
              }}
            />

            <br />
            <p>Phone Number</p>
            <input
              className="form-control"
              defaultValue={clickedContact.email}
              onChange={(event) => {
                editContactValues.email = event.target.value;
                setEdit(editContactValues);
              }}
            />
            <br />
            <p>Avatar URL</p>
            <input
              className="form-control"
              defaultValue={clickedContact.avatarURL}
              onChange={(event) => {
                editContactValues.avatarURL = event.target.value;
                setEdit(editContactValues);
              }}
            />
            <br />

            <button
              type="button"
              className="btn btn-primary"
              onClick={handleSaveEditClick}
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
