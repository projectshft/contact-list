import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ContactSnippet from './ContactSnippet';
import SearchBar from './SearchBar';

export default function Sidebar({ contacts, handleContactDelete }) {
  const [searchInput, setSearchInput] = useState('');
  const [filteredContacts, setFilteredContacts] = useState(contacts);

  const handleSearchChange = (e) => {
    setSearchInput(e);
    if (searchInput !== '') {
      setFilteredContacts(
        filteredContacts.filter((contact) => contact.first.toLowerCase().includes(searchInput.toLowerCase()))
      );
    } else {
      setFilteredContacts(contacts);
    }
  };

  const contactSnippetToRender = () =>
    searchInput.length > 1
      ? filteredContacts.map((contact) => (
          <ContactSnippet contact={contact} handleContactDelete={handleContactDelete} />
        ))
      : contacts.map((contact) => <ContactSnippet contact={contact} handleContactDelete={handleContactDelete} />);

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

      <SearchBar handleSearchChange={handleSearchChange} />
      <div className=" overflow-y-auto border-b w-full">{contactSnippetToRender()}</div>
      <div className="py-2 border-t w-full text-center">
        Total: {filteredContacts.length === 0 ? contacts.length : filteredContacts.length}
      </div>
    </div>
  );
}

Sidebar.propTypes = {
  contacts: PropTypes.array,
  handleContactDelete: PropTypes.func,
};
