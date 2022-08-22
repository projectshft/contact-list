import PropTypes from 'prop-types';
import { useState } from 'react';
import _ from 'lodash';
import { Link, useNavigate, useParams } from 'react-router-dom';
import validateInput from './Validation';

export default function EditUser({ users, updateUserData }) {
  const navigate = useNavigate();

  // Get user ID from url
  const { id } = useParams();
  // Try to find user with id
  const user = _.find(users, { id });

  // Set the initial state as the user's data or if no data is found set to an empty string
  const [name, setName] = useState(user ? user.name : '');
  const [email, setEmail] = useState(user ? user.email : '');
  const [phoneNum, setPhoneNum] = useState(user ? user.phone_number : '');
  const [imgURL, setImgURL] = useState(user ? user.image_url : '');

  // If no user with id provided in url exists, let user know
  if (!user) {
    return <div>Sorry, the user with id {id} has not been found</div>;
  }

  function handleChangeUserData() {
    const editedUser = {
      name,
      email,
      phone_number: phoneNum,
      image_url: imgURL,
      id: user.id,
    };
    if (validateInput(editedUser)) {
      updateUserData(id, editedUser);
      navigate('../', { replace: true });
    }
  }

  return (
    <div className="form">
      <form
        autoComplete="off"
        className="form__inner"
        onSubmit={handleChangeUserData}
      >
        <label htmlFor="userName" className="form__name-label">
          Name (Required)
        </label>
        <input
          type="text"
          className="form-control form__name-input"
          id="userName"
          maxLength="251"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <br />

        <label htmlFor="userEmail" className="form__email-label">
          Email
        </label>
        <input
          type="text"
          className="form-control form__email-input"
          id="userEmail"
          maxLength="254"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <br />

        <label htmlFor="userPhoneNum" className="form__phone-label">
          Phone Number
        </label>
        <input
          type="number"
          name="telphone"
          id="userPhoneNum"
          className="form-control form__phone-input"
          placeholder="888 888 8888"
          maxLength="12"
          title="Ten digits code"
          value={phoneNum}
          onChange={(event) => setPhoneNum(event.target.value)}
          required
        />

        <br />

        <label htmlFor="userImg" className="form__img-label">
          Link to Profile Picture
        </label>
        <input
          type="text"
          className="form-control form__img-input"
          id="userImg"
          value={imgURL}
          onChange={(event) => setImgURL(event.target.value)}
        />

        <br />

        <button type="submit" className="form__btn form__btn--small-text">
          Save Changes
        </button>
      </form>

      <Link to="/contacts" className="form__link-back">
        Cancel Edit
      </Link>
    </div>
  );
}

EditUser.defaultProps = {
  users: [],
};

EditUser.propTypes = {
  users: PropTypes.array,
  updateUserData: PropTypes.func.isRequired,
};
