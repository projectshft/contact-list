import { Link } from 'react-router-dom';

const Header = () => (
  <div className="mb-5 flex h-16 w-full flex-row items-center justify-center bg-blue-700 drop-shadow-lg">
    <Link
      to="/"
      className="fixed left-0 ml-4 rounded border-2 border-white  bg-white px-2 py-1 font-semibold text-blue-600 shadow-md"
    >
      HOME
    </Link>
    <div className="text-3xl font-semibold text-white">CONTACT BOOK</div>
  </div>
);

export default Header;
