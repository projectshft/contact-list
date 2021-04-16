import React from 'react';
import PropTypes from 'prop-types';

const IndividualContact = ({ match }) => {
  console.log(match);
  const { id } = match.params;
  console.log(id);
  return <h2>test</h2>;
};

IndividualContact.propTypes = {
  match: PropTypes.object,
};

export default IndividualContact;
