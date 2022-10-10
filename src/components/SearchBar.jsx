export default function SearchBar({ handleSearchChange }) {
  return (
    <form className="flex justify-center w-full border-b drop-shadow-sm ">
      <input
        className="border border-gray-300 rounded px-3 mb-4 self-center"
        type="text"
        placeholder="Search"
        onChange={(e) => handleSearchChange(e.target.value)}
      />
    </form>
  );
}
