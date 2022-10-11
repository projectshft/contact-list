import PropTypes from 'prop-types';

const SearchBar = ({ handleSearchChange }) => (
  <form className="flex w-full justify-center border-b drop-shadow-sm ">
    <input
      className="mb-4 self-center rounded border border-gray-300 px-3"
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
