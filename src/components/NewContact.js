import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

export default function NewContact({ addUser }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNum, setPhoneNum] = useState(null);
  const [imgURL, setImgURL] = useState('#');
  const [id] = useState(uuidv4());
  const navigate = useNavigate();

  function validateInput() {
    console.log(name, email, phoneNum, imgURL);
    return true;
  }

  function handleAddUserClick() {
    if (validateInput()) {
      console.log(phoneNum);
      const newUser = {
        name,
        email,
        phone_number: phoneNum,
        image_url: imgURL,
        id,
      };
      addUser(newUser);
      navigate('../', { replace: true });
    }
  }

  return (
    <div className="form">
      <form autoComplete="off" className="form__inner">
        <label htmlFor="userName" className="form__name-label">
          Name
        </label>
        <input
          type="text"
          className="form-control form__name-input"
          id="userName"
          maxLength="25"
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
          onChange={(event) => setEmail(event.target.value)}
        />

        <br />

        <label htmlFor="userPhoneNum" className="form__phone-label">
          Phone Number
        </label>
        <input
          type="tel"
          name="telphone"
          id="userPhoneNum"
          className="form-control form__phone-input"
          placeholder="888 888 8888"
          maxLength="12"
          title="Ten digits code"
          onChange={(event) => setPhoneNum(parseInt(event.target.value, 10))}
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
          onChange={(event) => setImgURL(event.target.value)}
        />

        <br />

        <button
          type="button"
          className="form__btn"
          onClick={handleAddUserClick}
        >
          Add User
        </button>
      </form>

      <Link to="/contacts" className="form__link-back">
        Back to Contacts
      </Link>
    </div>
  );
}

NewContact.propTypes = {
  addUser: PropTypes.func.isRequired,
};
