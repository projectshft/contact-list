import { object, PropTypes } from 'prop-types';
import { useState } from 'react';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';

const EditContact = ({ contacts, editContact }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const contact = contacts.find((x) => x.id === +id);

  const initialState = {
    id: 0,
    name: '',
    email: 'no@email.available',
    phone: 'n/a',
    image: '/images/default.png',
  };

  const [updateContact, setUpdateContact] = useState(contact);
  const { name, email, phone, image } = updateContact;

  if (!contact) {
    return <Navigate to="notFound" />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    editContact(updateContact);
    e.target.reset();
    navigate('../contacts');
  };

  const setInput = (e) => {
    if (e.target.value !== '') {
      setUpdateContact({ ...updateContact, [e.target.name]: e.target.value });
    } else {
      setUpdateContact({
        ...updateContact,
        [e.target.name]: initialState[e.target.name],
      });
    }
  };

  const formatInput = (e) => {
    e.target.value = e.target.value.trim();
    setInput(e);
  };

  return (
    <>
      <div className="flex-1 border-b pb-4">
        <h1 className="text-3xl font-bold text-gray-800 text-center">
          Edit Contact
        </h1>
      </div>
      <div className="grid">
        <div className="flex justify-center pt-6 text-gray-600">
          <form onSubmit={handleSubmit} className="w-full">
            <label className="flex">
              <span className="mr-2">Name</span>
              <input
                type="text"
                name="name"
                value={name}
                required="required"
                className="border rounded-md mb-2 py-1 px-2 focus:outline-teal-300 grow"
                onChange={setInput}
                onBlur={formatInput}
              />
            </label>
            <label className="flex">
              <span className="mr-2">Email</span>
              <input
                type="email"
                name="email"
                value={email}
                required="required"
                className="border rounded-md mb-2 py-1 px-2 focus:outline-teal-300 grow"
                onChange={setInput}
                onBlur={formatInput}
              />
            </label>
            <label className="flex">
              <span className="mr-2">Phone Number</span>
              <input
                type="text"
                name="phone"
                value={phone}
                required="required"
                className="border rounded-md mb-2 py-1 px-2 focus:outline-teal-300 grow"
                onChange={setInput}
                onBlur={formatInput}
              />
            </label>
            <label className="flex">
              <span className="mr-2">Image URL</span>
              <input
                type="text"
                name="image"
                value={image}
                required="required"
                className="border rounded-md mb-2 py-1 px-2 focus:outline-teal-300 grow"
                onChange={setInput}
                onBlur={formatInput}
              />
            </label>
            <div className="flex">
              <button
                type="submit"
                className="block bg-gray-800 text-white hover:bg-teal-300 rounded-md mt-4 py-1 px-2 hover:text-gray-600 mr-2"
              >
                Update Contact
              </button>
              <Link
                to="/contacts"
                className="block bg-gray-800 text-white hover:bg-teal-300 rounded-md mt-4 py-1 px-2 hover:text-gray-600"
              >
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

EditContact.propTypes = {
  contacts: PropTypes.arrayOf(object).isRequired,
  editContact: PropTypes.func.isRequired,
};

export default EditContact;
