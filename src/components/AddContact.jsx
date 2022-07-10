import { PropTypes } from 'prop-types';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AddContact = ({ addContact }) => {
  const navigate = useNavigate();

  // To use initialState (defaults), remove 'required' from input elements
  const initialState = {
    id: 0,
    name: '',
    email: 'no@email.available',
    phone: 'n/a',
    image: '/images/default.png',
  };

  const [newContact, setNewContact] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact({ ...newContact, id: +new Date() });
    setNewContact(initialState);
    e.target.reset();
    navigate('../contacts');
  };

  const setInput = (e) => {
    if (e.target.value !== '') {
      setNewContact({ ...newContact, [e.target.name]: e.target.value });
    } else {
      setNewContact({
        ...newContact,
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
          Add Contact
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
                Add Contact
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

AddContact.propTypes = {
  addContact: PropTypes.func.isRequired,
};

export default AddContact;
