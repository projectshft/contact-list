import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ContactSnippet from './ContactSnippet';
import SearchBar from './SearchBar';

export default function Sidebar({ contacts, handleContactDelete }) {
  return (
    <div className="flex flex-col justify-start items-center w-80 bg-white  rounded-lg shadow-md overflow-clip">
      <div className="flex flex-row self-end p-3">
        <Link
          to="new-contact"
          type="button"
          className="px-2 rounded-md border-2 text-green-500 font-bold border-green-500 hover:bg-green-500 hover:text-white"
        >
          +ADD
        </Link>
      </div>
      <SearchBar />
      <div className=" overflow-y-auto border-b w-full">
        <ContactSnippet contacts={contacts} handleContactDelete={handleContactDelete} />
      </div>
      <div className="mt-2">Total: {contacts.length}</div>
    </div>
  );
}

Sidebar.propTypes = {
  contacts: PropTypes.array,
};
