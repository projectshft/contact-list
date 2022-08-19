import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
// import { createConstructor } from 'typescript';

export default function NewContact({ addUser }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNum, setPhoneNum] = useState(null);
  const [imgURL, setImgURL] = useState('');
  const [id] = useState(uuidv4());
  const navigate = useNavigate();

  function checkImage(url) {
    const image = new Image();

    image.onerror = function () {
      alert(
        'The Image URL imputted is invalid and the image has been replaced'
      );
    };
    image.src = url;
  }

  function validateInput() {
    // The only required field I have set is the name of the contact. The image will auto-replace itself only if the link is invalid
    if (name.length > 0) {
      checkImage(imgURL);
      return true;
    }
    return false;
  }

  function handleAddUserClick() {
    if (validateInput()) {
      const newUser = {
        name,
        email,
        phone_number: phoneNum,
        image_url: imgURL,
        id,
      };
      addUser(newUser);
      navigate('../', { replace: true });
    } else {
      alert('Please enter a name for this contact (required)');
    }
  }

  return (
    <div className="form">
      <form autoComplete="off" className="form__inner">
        <label htmlFor="userName" className="form__name-label">
          Name (Required)
        </label>
        <input
          type="text"
          className="form-control form__name-input"
          id="userName"
          maxLength="251"
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
