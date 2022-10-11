import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ContactSnippet from './ContactSnippet';
import SearchBar from './SearchBar';

const Sidebar = ({ contacts, handleContactDelete }) => {
  const [searchInput, setSearchInput] = useState('');

  const handleSearchChange = (e) => {
    setSearchInput(e);
  };

  return (
    <div className="flex h-full w-80 flex-col items-center justify-start text-clip rounded-lg bg-white shadow-md">
      <div className="mb-4 flex w-full flex-row items-center justify-between rounded-t-md bg-blue-600 p-3 drop-shadow-md">
        <div className="px-2 text-center text-white">Total Contacts: {contacts.length}</div>
        <Link
          to="new-contact"
          type="button"
          className="rounded-md border-2 border-green-600 bg-green-600 px-2 font-bold text-white shadow-md hover:bg-white hover:text-green-600"
        >
          +ADD
        </Link>
      </div>

      <SearchBar handleSearchChange={handleSearchChange} />
      <div className=" w-full overflow-y-auto border-b">
        {contacts
          .filter(
            (contact) =>
              contact.first.toLowerCase().includes(searchInput.toLowerCase()) ||
              contact.last.toLowerCase().includes(searchInput.toLowerCase())
          )
          .map((contact) => (
            <ContactSnippet contact={contact} handleContactDelete={handleContactDelete} />
          ))}
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  contacts: PropTypes.array,
  handleContactDelete: PropTypes.func,
};

export default Sidebar;
