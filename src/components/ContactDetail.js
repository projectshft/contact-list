import { useParams, Link, useHistory } from 'react-router-dom';
import { PropTypes } from 'prop-types';

const ContactDetail = (props) => {
  const { id } = useParams();
  const history = useHistory();
  const { contacts } = props;
  /* returns contact with id matching that of url */
  const currentContact = contacts.find(function (contact) {
    return contact.id === parseInt(id, 10);
  });
  const editLink = `${id}/edit`;
  const { deleteContact } = props;

  return (
    <div>
      <div className="row justify-content-md-center">
        <div className="col-md-4 self-align-center">
          <div className="card">
            <img
              className="card-img-top"
              src={currentContact.avatarURL}
              alt="File not found"
            />
            <div className="card-body">
              <h5 className="card-title">{currentContact.fullname}</h5>
              <p className="card-text">{currentContact.email}</p>
              <p className="card-text">{currentContact.phone}</p>
              <div className="row justify-content-around">
                <Link to="/contacts">
                  <button type="button" className="btn btn-primary">
                    Go Back
                  </button>
                </Link>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => {
                    if (
                      window.confirm(
                        'Are you sure you wish to delete this contact?'
                      )
                    ) {
                      deleteContact(id);
                      history.push('/contacts');
                    }
                  }}
                >
                  Delete
                </button>

                <Link to={editLink}>
                  <button type="button" className="btn btn-primary">
                    Edit
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ContactDetail.propTypes = {
  contacts: PropTypes.array,
  deleteContact: PropTypes.func,
};
export default ContactDetail;
