import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const DeleteConfirmation = ({ handleConfirmDeleteButton, handleDelete, id }) => (
  <div className="flex flex-row justify-center items-center w-full">
    <Link
      to="/contacts"
      className="hover:bg-red-400 text-center hover:text-white rounded w-full p-1 m-2 text-red-400 border-2 border-red-400"
      type="button"
      onClick={() => handleDelete(id)}
    >
      Yes
    </Link>
    <button
      type="button"
      className="hover:bg-slate-900 hover:text-white rounded w-full p-1 m-2 text-slate-900 border-2 border-slate-900"
      onClick={handleConfirmDeleteButton}
    >
      No
    </button>
  </div>
);

DeleteConfirmation.propTypes = {
  handleConfirmDeleteButton: PropTypes.func,
  handleDelete: PropTypes.func,
  id: PropTypes.number,
};

export default DeleteConfirmation;
