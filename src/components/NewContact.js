import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

export default function NewContact({ addUser }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNum, setPhoneNum] = useState(null);
  const [imgURL, setImgURL] = useState('#');
  const navigate = useNavigate();

  // const use = {
  //   name: 'hey',
  //   email: 'ohshit@ohsss',
  //   phone_number: 12412312312,
  //   id: uuidv4(),
  //   image_url: 'https://avatarfiles.alphacoders.com/285/285445.png',
  // };

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
        id: uuidv4(),
      };
      addUser(newUser);
      navigate('../', { replace: true });
    }
  }

  return (
    <div>
      <form>
        <label htmlFor="userName">Name</label>
        <input
          type="text"
          className="form-control"
          id="userName"
          onChange={(event) => setName(event.target.value)}
        />

        <br />

        <label htmlFor="userEmail">Email</label>
        <input
          type="text"
          className="form-control"
          id="userEmail"
          onChange={(event) => setEmail(event.target.value)}
        />

        <br />

        <label htmlFor="userPhoneNum">Phone Number</label>
        <input
          type="tel"
          name="telphone"
          id="userPhoneNum"
          placeholder="888 888 8888"
          maxLength="12"
          title="Ten digits code"
          onChange={(event) => setPhoneNum(parseInt(event.target.value, 10))}
          required
        />

        <br />

        <label htmlFor="userImg">Link to Profile Picture</label>
        <input
          type="text"
          className="form-control"
          id="userImg"
          onChange={(event) => setImgURL(event.target.value)}
        />

        <br />

        <button type="button" onClick={handleAddUserClick}>
          Add User
        </button>
      </form>

      <Link to="/contacts">Contacts</Link>
    </div>
  );
}

NewContact.propTypes = {
  addUser: PropTypes.func.isRequired,
};
