import { useParams } from 'react-router-dom';
import { PropTypes } from 'prop-types';

const ContactDetail = (props) => {
  const { id } = useParams();
  const { posts } = props;
  const currentContact = posts.filter(function (contacts) {
    return contacts.id === parseInt(id, 10);
  });

  return (
    <div>
      <div className="h1 text-center">Contact Deatil</div>
      <img
        src={currentContact[0].avatarURL}
        alt="File not found"
        width="200"
        height="200"
        id={currentContact[0].id}
      />
      <p>{currentContact[0].fullname}</p>
      <p>{currentContact[0].email}</p>
      <p>{currentContact[0].phone}</p>
    </div>
  );
};

ContactDetail.propTypes = {
  posts: PropTypes.any,
};
export default ContactDetail;
