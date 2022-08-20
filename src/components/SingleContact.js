import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import { useParams } from 'react-router-dom';

const SingleContact = ({ singleContact }) => {
  const { id } = useParams();
  return (
    <div>
      <h1>Contact Name</h1>
      <h2>{id}</h2>
      <h2>{singleContact}</h2>
    </div>
  );
};

SingleContact.propTypes = {
  singleContact: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      fName: PropTypes.string,
      lName: PropTypes.string,
      imageUrl: PropTypes.string,
      email: PropTypes.string,
      phoneNumber: PropTypes.string,
    }).isRequired
  ).isRequired,
};

export default SingleContact;
