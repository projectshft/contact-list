import { useNavigate, useOutletContext, useParams } from 'react-router-dom';
import { useState } from 'react';
import generateUserId from '../utils/generateUserId';

const NewContact = () => {
  const [contacts, setContacts] = useOutletContext();

  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [avatar, setAvatar] = useState('');

  const navigate = useNavigate();

  const handleCreateClick = (e) => {
    e.preventDefault();
    const newContactId = generateUserId(contacts);
    setContacts([...contacts, { id: newContactId, first, last, phone, email }]);
    navigate(`/contacts/${newContactId}`);
  };

  return (
    <form className="animate-fadeIn bg-white max-h-96 w-80 rounded-lg p-5 ml-5 flex flex-col items-center justify-evenly shadow-lg">
      {/* <AvatarSelector avatar={avatar} handleAvatarSelect={handleAvatarSelect} /> */}
      <div className="flex flex-col w-full items-center">
        <input
          type="text"
          className="text-center border border-blue-100 mb-1 font-light w-full rounded"
          value={avatar}
          placeholder="Avatar Link"
          onChange={(e) => setAvatar(e.target.value)}
          required
        />
        <div className="flex flex-row">
          <input
            type="text"
            className="text-end border border-blue-100 mb-1 text-lg font-semibold w-full rounded mr-1"
            onChange={(e) => setFirst(e.target.value)}
            value={first}
            placeholder="First"
            required
          />
          <input
            type="text"
            className="text-start border border-blue-100 mb-1 text-lg font-semibold w-full rounded"
            onChange={(e) => setLast(e.target.value)}
            value={last}
            placeholder="Last"
            required
          />
        </div>
        <input
          type="phone"
          className="text-center border border-blue-100 mb-1 font-light w-full rounded"
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
          placeholder="Phone"
          required
        />
        <input
          type="email"
          className="text-center border border-blue-100 mb-1 font-light w-full rounded"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="Email"
          required
        />
      </div>
      <div className="w-full flex flex-row">
        <button
          type="submit"
          className="w-full m-1 border-2 text-green-500 font-semibold border-green-500 hover:bg-green-500 rounded p-1 hover:text-white"
          onClick={(e) => handleCreateClick(e)}
        >
          Create
        </button>
        <button
          type="submit"
          className="w-full m-1 border-2 text-blue-500 font-semibold border-blue-500 hover:bg-blue-500 rounded p-1 hover:text-white"
          onClick={(e) => handleCreateClick(e)}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default NewContact;
