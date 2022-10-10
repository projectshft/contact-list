import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function ContactSnippet({ contact }) {
  // const contactsToRender = contacts.map((contact) => (
  //   <Link
  //     to={contact.id.toString()}
  //     key={contact.id}
  //     className="flex flex-row justify-start items-center border-b last:border-none p-1 hover:bg-slate-600 hover:text-white"
  //   >
  //     <div>
  //       <img src={contact.avatar} alt="avatar" className="rounded-full border-2 border-blue-300 m-1" />
  //     </div>
  //     <p className="ml-2 truncate">
  //       {contact.first} {contact.last}
  //     </p>
  //   </Link>
  // ));

  // return <div>{contactsToRender}</div>;
  return (
    <Link
      to={contact.id.toString()}
      key={contact.id}
      className="flex flex-row justify-start items-center border-b last:border-none p-1 hover:bg-slate-600 hover:text-white"
    >
      <div>
        <img src={contact.avatar} alt="avatar" className="rounded-full border-2 border-blue-300 m-1" />
      </div>
      <p className="ml-2 truncate">
        {contact.first} {contact.last}
      </p>
    </Link>
  );
}

ContactSnippet.propTypes = {
  contact: PropTypes.object,
};
