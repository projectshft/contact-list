import { useState } from 'react';
import { useParams, Link, useOutletContext } from 'react-router-dom';
import DeleteConfirmation from '../components/DeleteConfirmation';

const Contact = () => {
  const [deleteConfirmActive, setDeleteConfirmActive] = useState(false);
  const [contacts, setContacts] = useOutletContext();

  const { contactId } = useParams();

  const handleConfirmDeleteButton = () => {
    setDeleteConfirmActive(!deleteConfirmActive);
  };

  const handleDelete = (id) => {
    setContacts(contacts.filter((contact) => +contact.id !== id));
  };

  const currentContact = contacts.reduce((acc, contact) => (contact.id === +contactId ? contact : acc), {});

  return (
    <div className="animate-fadeIn ml-5 flex max-h-80 w-80 flex-col items-center justify-start rounded-lg bg-white shadow-lg">
      <div className="mb-5 flex w-full items-center justify-center rounded-t-lg bg-blue-600 py-5 drop-shadow-md">
        <img src={currentContact.avatar} alt="avatar" className="rounded-full bg-white p-2" />
      </div>
      <div className="mb-5 flex flex-col items-center">
        <div className="mb-2 text-2xl font-bold">
          {currentContact.first} {currentContact.last}
        </div>
        <div className="font-light">{currentContact.phone}</div>
        <div className="font-light">{currentContact.email}</div>
      </div>
      <div className="w-full">
        <div className="flex w-full flex-row items-center justify-center">
          {deleteConfirmActive ? (
            <DeleteConfirmation
              handleConfirmDeleteButton={handleConfirmDeleteButton}
              handleDelete={handleDelete}
              id={currentContact.id}
            />
          ) : (
            <div className="mx-8 flex w-full">
              <Link
                to="edit"
                type="button"
                className="m-2 w-full rounded border-2 border-blue-600 bg-blue-600 p-1 text-center text-white shadow-md hover:bg-white hover:text-blue-600"
              >
                Edit
              </Link>
              <button
                type="button"
                className="m-2 w-full rounded border-2 border-red-500 bg-red-500 p-1 text-white shadow-md hover:bg-white hover:text-red-500"
                onClick={handleConfirmDeleteButton}
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
