import { Link } from 'react-router-dom';
import { ReactComponent as PlusIcon } from '../images/plus.svg';

const Header = () => (
  <div className="flex flex-row p-6 bg-gray-800">
    <h1 className="flex items-center flex-auto text-3xl font-bold text-white hover:text-teal-300">
      <Link to="contacts">My Contacts App</Link>
    </h1>
    <Link to="contacts/new" className="flex items-center justify-center">
      <PlusIcon className="w-8 h-8 text-white hover:text-teal-300 " />
    </Link>
  </div>
);

export default Header;
