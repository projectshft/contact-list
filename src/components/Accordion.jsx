import PropTypes from 'prop-types';
import { useState } from 'react';

export default function Accordion({ header, content }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="">
      <button type="button" className="bg-slate-500 w-full p-1 my-1 text-white" onClick={() => setIsActive(!isActive)}>
        {header}
      </button>
      {isActive ? (
        <div className=" ">
          {content.map((contact, idx) => (
            <div className="border-b border-slate-300 text-slate-900 m-1 last:border-none" key={idx}>
              {contact.first} {contact.last}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

Accordion.propTypes = {
  header: PropTypes.string.isRequired,
  content: PropTypes.array.isRequired,
};
