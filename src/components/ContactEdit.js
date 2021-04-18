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
    <div>
      <div className="row justify-content-md-center">
        <div className="col-md-4 self-align-center">
          <p>edit view</p>
          <Link to="/">
            <button
              type="button"
              onClick={handleClick}
              className="btn btn-primary"
            >
              Save Edit
            </button>
          </Link>

          <input
            className="form-control"
            defaultValue={thePost.fullname}
            placeholder=""
            onChange={(event) => {
              const s = { ...thePost };
              s.fullname = event.target.value;
              setEdit(s);
            }}
          />
          <br />

          <input
            className="form-control"
            defaultValue={thePost.phone}
            placeholder=""
            onChange={(event) => {
              const s = { ...thePost };
              s.phone = event.target.value;
              setEdit(s);
            }}
          />

          <br />
          <input
            className="form-control"
            defaultValue={thePost.email}
            placeholder=""
            onChange={(event) => {
              const s = { ...thePost };
              s.email = event.target.value;
              setEdit(s);
            }}
          />
          <br />

          <input
            className="form-control"
            defaultValue={thePost.avatarURL}
            placeholder=""
            onChange={(event) => {
              const s = { ...thePost };
              s.avatarURL = event.target.value;
              setEdit(s);
            }}
          />
          <br />
        </div>
      </div>
    </div>
  );
};

ContactEdit.propTypes = {
  contacts: PropTypes.any,
  editContact: PropTypes.any,
};
export default ContactEdit;
