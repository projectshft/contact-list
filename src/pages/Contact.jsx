import { useState } from 'react';
import { useParams, Link, useOutletContext } from 'react-router-dom';
import DeleteConfirmation from '../components/DeleteConfirmation';

export default function Contact() {
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
    <div className="bg-white max-h-96 w-80 rounded-lg p-5 ml-5 flex flex-col items-center justify-evenly shadow-lg">
      <img src={currentContact.avatar} alt="avatar" className="bg-blue-100 rounded-full" />
      <div className="flex flex-col items-center">
        <div className="text-lg font-semibold">
          {currentContact.first} {currentContact.last}
        </div>
        <div className="font-light">{currentContact.phone}</div>
        <div className="font-light">{currentContact.email}</div>
      </div>
      <div className="w-full">
        <div className="flex flex-row justify-center items-center w-full">
          {deleteConfirmActive ? (
            <DeleteConfirmation
              handleConfirmDeleteButton={handleConfirmDeleteButton}
              handleDelete={handleDelete}
              id={currentContact.id}
            />
          ) : (
            <>
              <Link
                to="edit"
                type="button"
                className="hover:bg-slate-900 hover:text-white w-full text-center rounded p-1 m-2 text-slate-900 border-2 border-slate-900"
              >
                Edit
              </Link>
              <button
                type="button"
                className="hover:bg-slate-900 hover:text-white w-full rounded p-1 m-2 text-slate-900 border-2 border-slate-900"
                onClick={handleConfirmDeleteButton}
              >
                Delete
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
