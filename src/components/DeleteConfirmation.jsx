import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const DeleteConfirmation = ({ handleConfirmDeleteButton, handleDelete, id }) => (
  <div className="mx-8 flex w-full flex-row items-center justify-center">
    <Link
      to="/contacts"
      className="m-2 w-full rounded border-2 border-red-600 bg-red-600 p-1 text-center text-white shadow-md hover:bg-white hover:text-red-600"
      type="button"
      onClick={() => handleDelete(id)}
    >
      Yes
    </Link>
    <button
      type="button"
      className="m-2 w-full rounded border-2 border-blue-600 bg-blue-600 p-1 text-center text-white shadow-md hover:bg-white hover:text-blue-600"
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
