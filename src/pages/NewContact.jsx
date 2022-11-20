import { useNavigate, useOutletContext } from 'react-router-dom';
import { useState } from 'react';
import generateUserId from '../utils/generateUserId';
import AvatarExamples from '../components/AvatarExamples';

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
    setContacts([...contacts, { id: newContactId, avatar, first, last, phone, email }]);
    navigate(`/contacts/${newContactId}`);
  };

  const handleAvatarSelect = (link) => {
    setAvatar(link);
  };

  const handleCancel = () => {
    navigate('/contacts');
  };
  return (
    <div className="animate-fadeIn flex flex-col">
      <form className=" ml-5 mb-5 flex h-80 w-80 flex-col items-center justify-evenly rounded-lg bg-white p-5 shadow-lg">
        <div className="flex w-full flex-col items-center">
          <input
            type="text"
            className="mb-1 w-full rounded border border-blue-100 text-center font-light"
            value={avatar}
            placeholder="Avatar Link"
            onChange={(e) => setAvatar(e.target.value)}
            required
          />
          <div className="flex flex-row">
            <input
              type="text"
              className="mb-1 mr-1 w-full rounded border border-blue-100 text-end text-lg font-semibold"
              onChange={(e) => setFirst(e.target.value)}
              value={first}
              placeholder="First"
              required
            />
            <input
              type="text"
              className="mb-1 w-full rounded border border-blue-100 text-start text-lg font-semibold"
              onChange={(e) => setLast(e.target.value)}
              value={last}
              placeholder="Last"
              required
            />
          </div>
          <input
            type="phone"
            className="mb-1 w-full rounded border border-blue-100 text-center font-light"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            placeholder="Phone"
            required
          />
          <input
            type="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$"
            className="mb-1 w-full rounded border border-blue-100 text-center font-light"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Email"
            required
          />
        </div>
        <div className="flex w-full flex-row">
          <button
            type="submit"
            className="m-1 w-full rounded border-2 border-green-500 p-1 font-semibold text-green-500 hover:bg-green-500 hover:text-white"
            onClick={(e) => handleCreateClick(e)}
          >
            Create
          </button>
          <button
            type="button"
            className="m-1 w-full rounded border-2 border-blue-500 p-1 font-semibold text-blue-500 hover:bg-blue-500 hover:text-white"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </form>
      <AvatarExamples handleAvatarSelect={handleAvatarSelect} />
    </div>
  );
};

export default NewContact;
