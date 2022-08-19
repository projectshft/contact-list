import React from 'react';
import PropTypes from 'prop-types';

const ContactInfo = ({
  contactId,
  contactName,
  contactImageUrl,
  contactEmail,
  contactPhoneNumber,
}) => {
  if (!contactId) {
    return <div>Sorry, that contact could not be found.</div>;
  }

  return (
    <div>
      <h1>{contactName}</h1>
      <img src={contactImageUrl} alt="Contact" />
      <h3>
        {contactEmail} {contactPhoneNumber}
      </h3>
    </div>
  );
};

ContactInfo.propTypes = {
  contactId: PropTypes.string.isRequired,
  contactName: PropTypes.string.isRequired,
  contactImageUrl: PropTypes.string,
  contactEmail: PropTypes.string,
  contactPhoneNumber: PropTypes.string,
};

ContactInfo.defaultProps = {
  contactImageUrl:
    'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png',
};

export default ContactInfo;
