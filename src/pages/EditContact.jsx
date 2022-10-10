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
    <form className="animate-fadeIn bg-white max-h-96 w-80 rounded-lg p-5 ml-5 flex flex-col items-center justify-evenly shadow-lg">
      <img src={currentContact.avatar} alt="avatar" className="bg-blue-100 rounded-full" />
      <div className="flex flex-col w-full items-center">
        <div className="flex flex-row">
          <input
            type="text"
            className="text-end border border-blue-100 mb-1 text-lg font-semibold w-full rounded mr-1"
            onChange={(e) => setFirst(e.target.value)}
            value={first}
          />
          <input
            type="text"
            className="text-start border border-blue-100 mb-1 text-lg font-semibold w-full rounded"
            onChange={(e) => setLast(e.target.value)}
            value={last}
          />
        </div>
        <input
          type="text"
          className="text-center border border-blue-100 mb-1 font-light w-full rounded"
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
        />
        <input
          type="text"
          className="text-center border border-blue-100 mb-1 font-light w-full rounded"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>
      <button
        type="submit"
        className="border-2 text-green-500 font-semibold border-green-500 hover:bg-green-500 rounded p-1 hover:text-white"
        onClick={(e) => handleSubmitClick(e)}
      >
        Confirm Edit
      </button>
    </form>
  );
};

export default EditContact;
