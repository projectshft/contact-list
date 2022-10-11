import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import next from '../assets/next.png';

const ContactSnippet = ({ contact }) => {
  const [contactIsHovered, setContactIsHovered] = useState(false);

  return (
    <Link
      to={contact.id.toString()}
      key={contact.id}
      className="flex flex-row items-center justify-between border-b p-1 last:border-none hover:bg-blue-600 hover:text-white"
      onMouseOver={() => setContactIsHovered(true)}
      onMouseLeave={() => setContactIsHovered(false)}
    >
      <div className="flex flex-row items-center">
        <div>
          <img src={contact.avatar} alt="avatar" className="m-1 rounded-full border-2 border-blue-600" />
        </div>
        <p className="ml-2 truncate">
          {contact.first} {contact.last}
        </p>
      </div>
      {contactIsHovered ? (
        <div className="mr-2 justify-self-end">
          <img src={next} alt="right-arrow" className="h-8 w-8" />
        </div>
      ) : null}
    </Link>
  );
};

ContactSnippet.propTypes = {
  contact: PropTypes.object,
};

export default ContactSnippet;
