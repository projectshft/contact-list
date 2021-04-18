import { useParams, Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { useState } from 'react';

const ContactEdit = (props) => {
  const { id } = useParams();
  const { contacts } = props;
  const currentContact = contacts.filter(function (contact) {
    return contact.id === parseInt(id, 10);
  });
  const [thePost, setEdit] = useState(currentContact[0]);
  const { editContact } = props;

  const handleClick = () => {
    editContact(thePost);
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8 self-align-center">
        <form className="contact-form">
          <div className="form-group">
            <p>Full Name</p>
            <input
              className="form-control"
              defaultValue={thePost.fullname}
              onChange={(event) => {
                const s = { ...thePost };
                s.fullname = event.target.value;
                setEdit(s);
              }}
            />
            <br />
            <p>Email Address</p>
            <input
              className="form-control"
              defaultValue={thePost.phone}
              onChange={(event) => {
                const s = { ...thePost };
                s.phone = event.target.value;
                setEdit(s);
              }}
            />

            <br />
            <p>Phone Number</p>
            <input
              className="form-control"
              defaultValue={thePost.email}
              onChange={(event) => {
                const s = { ...thePost };
                s.email = event.target.value;
                setEdit(s);
              }}
            />
            <br />
            <p>Avatar URL</p>
            <input
              className="form-control"
              defaultValue={thePost.avatarURL}
              onChange={(event) => {
                const s = { ...thePost };
                s.avatarURL = event.target.value;
                setEdit(s);
              }}
            />
            <br />
            <Link to="/">
              <button
                type="button"
                onClick={handleClick}
                className="btn btn-primary"
              >
                Save Edit
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

ContactEdit.propTypes = {
  contacts: PropTypes.any,
  editContact: PropTypes.any,
};
export default ContactEdit;
