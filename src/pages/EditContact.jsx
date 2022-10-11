import { useNavigate, useOutletContext, useParams } from 'react-router-dom';
import { useState } from 'react';

const EditContact = () => {
  const [contacts, setContacts] = useOutletContext();
  const { contactId } = useParams();
  const currentContact = contacts.reduce((acc, contact) => (contact.id === +contactId ? contact : acc), {});

  const [first, setFirst] = useState(currentContact.first);
  const [last, setLast] = useState(currentContact.last);
  const [email, setEmail] = useState(currentContact.email);
  const [phone, setPhone] = useState(currentContact.phone);
  // const [avatar, setAvatar] = useState(currentContact.avatar);

  const navigate = useNavigate();

  const handleSubmitClick = (e) => {
    e.preventDefault();
    setContacts(
      contacts.map((contact) =>
        contact.id === currentContact.id ? { ...contact, first, last, email, phone } : contact
      )
    );
    navigate(`../${contactId}`);
  };

  return (
    <form className="animate-fadeIn ml-5 flex max-h-80 w-80 flex-col items-center justify-start rounded-lg bg-white shadow-lg">
      <div className="mb-5 flex w-full items-center justify-center rounded-t-lg bg-blue-600 py-5 drop-shadow-md">
        <img src={currentContact.avatar} alt="avatar" className="rounded-full bg-white p-2" />
      </div>
      <div className="mx-4 mb-5 flex flex-col items-center">
        <div className="flex flex-row">
          <input
            type="text"
            className="mb-1 mr-1 w-full rounded border border-blue-300 bg-yellow-50 px-1  text-end text-xl font-semibold"
            onChange={(e) => setFirst(e.target.value)}
            value={first}
          />
          <input
            type="text"
            className="mb-1 mr-1 w-full rounded border border-blue-300 bg-yellow-50 px-1 text-start  text-xl font-semibold"
            onChange={(e) => setLast(e.target.value)}
            value={last}
          />
        </div>
        <input
          type="text"
          className="mb-1 w-full rounded border border-blue-300 bg-yellow-50 px-1 text-center font-light"
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
        />
        <input
          type="text"
          className="mb-1 w-full rounded border border-blue-300 bg-yellow-50 px-1 text-center font-light"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>
      <button
        type="submit"
        className="rounded border-2 border-green-500 bg-green-500 p-1 font-semibold text-white drop-shadow-md hover:bg-white hover:text-green-500"
        onClick={(e) => handleSubmitClick(e)}
      >
        Confirm Edit
      </button>
    </form>
  );
};

export default EditContact;
