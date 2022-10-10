import PropTypes from 'prop-types';

const SearchBar = ({ handleSearchChange }) => (
  <form className="flex justify-center w-full border-b drop-shadow-sm ">
    <input
      className="border border-gray-300 rounded px-3 mb-4 self-center"
      type="text"
      placeholder="Search"
      onChange={(e) => handleSearchChange(e.target.value)}
    />
  </form>
);

SearchBar.propTypes = {
  handleSearchChange: PropTypes.func,
};

export default SearchBar;
