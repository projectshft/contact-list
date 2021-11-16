import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ContactForm = (props) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [img, setImg] = useState('');

  const handleSubmitClick = (event) => {
    event.preventDefault();
    /* eslint-disable */
    props.addContact({
      name,
      phone,
      email,
      img,
      id: props.contacts.length,
    });

    // eslint-disable-next-line react/prop-types
    props.history.push('/contacts');
  };
  /* eslint-enable */

  return (
    <div className="container">
      <h1>Contact Form!</h1>
      <form className="post-form" onSubmit={handleSubmitClick}>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Phone Number"
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Image URL"
          onChange={(e) => setImg(e.target.value)}
        />

        <button className="btn" type="button">
          Submit
        </button>
      </form>
    </div>
  );
};

ContactForm.propTypes = {
  contacts: PropTypes.array.isRequired,
  addContact: PropTypes.func.isRequired,
};

export default ContactForm;
