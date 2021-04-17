import { useParams, Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

const ContactDetail = (props) => {
  const { id } = useParams();
  const { posts } = props;
  const currentContact = posts.filter(function (contacts) {
    return contacts.id === parseInt(id, 10);
  });
  const editLink = `${id}/edit`;
  const { deletePost } = props;

  const handleClick = () => {
    deletePost(id);
  };

  return (
    <div>
      <div className="row justify-content-md-center">
        <div className="col-md-4 self-align-center">
          <div className="card">
            <img
              className="card-img-top"
              src={currentContact[0].avatarURL}
              alt="File not found"
            />
            <div className="card-body">
              <h5 className="card-title">{currentContact[0].fullname}</h5>
              <p className="card-text">{currentContact[0].email}</p>
              <p className="card-text">{currentContact[0].phone}</p>
              <div className="row justify-content-around">
                <Link to="/contacts">
                  <button type="button" className="btn btn-primary">
                    Go Back
                  </button>
                </Link>
                <Link to="/contacts">
                  <button
                    type="button"
                    onClick={handleClick}
                    className="btn btn-primary"
                  >
                    Delete
                  </button>
                </Link>
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
  posts: PropTypes.any,
  deletePost: PropTypes.any,
};
export default ContactDetail;
