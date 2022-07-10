import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { ReactComponent as XIcon } from '../images/x.svg';
import { ReactComponent as EditIcon } from '../images/edit.svg';

const ContactCard = ({ id, name, email, phone, image, deleteContact }) => {
  const handleDeleteContact = () => {
    if (window.confirm(`Do you really want to delete ${name}?`)) {
      deleteContact(id);
    }
  };

  return (
    <div>
      <div className="flex border-b p-4 text-gray-600 hover:bg-teal-300 hover:text-gray-800">
        <Link to={`${id}`} className="grow">
          <div className="grid grid-cols-[5rem,1fr] md:grid-cols-[5rem,2fr,3fr,2fr] gap-x-4">
            <div className="w-[5rem] h-[5rem] row-span-3 md:row-span-1">
              <img
                src={image}
                alt="profile pic"
                className="rounded-lg h-full"
              />
            </div>
            <div className="flex items-center font-bold">{name}</div>
            <div className="flex items-center font-mono text-xs">{email}</div>
            <div className="flex items-center font-mono text-xs">{phone}</div>
          </div>
        </Link>
        <Link to={`${id}/edit`} className="flex items-center mx-2">
          <EditIcon className="w-4 h-4 hover:text-white " />
        </Link>
        <Link
          to="/contacts"
          onClick={handleDeleteContact}
          className="flex items-center"
        >
          <XIcon className="w-5 h-5 hover:text-white " />
        </Link>
      </div>
    </div>
  );
};

ContactCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactCard;
