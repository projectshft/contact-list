import React from 'react';

const Contact = (props) => {
  return (
    <div>
      <h3>{props.name}</h3>
      <img src={props.image_url} alt='' />
      <h2>{props.email}</h2>
      <h2>{props.phone_number}</h2>
    </div>
  );
};

export default Contact;
