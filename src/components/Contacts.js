import { Routes, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Contact from './Contact';
import FullContacts from './FullContacts';
import NewContact from './NewContact';
import EditUser from './EditUser';

const Contacts = ({ users, addUser, removeUser, updateUserData }) => (
  <Routes>
    <Route
      index
      element={<FullContacts users={users} removeUser={removeUser} />}
    />
    <Route path="new" element={<NewContact addUser={addUser} />} />

    <Route path=":id" element={<Contact users={users} />} />
    <Route
      path=":id/edit"
      element={<EditUser users={users} updateUserData={updateUserData} />}
    />
  </Routes>
);

export default Contacts;

Contacts.propTypes = {
  users: PropTypes.array.isRequired,
  addUser: PropTypes.func.isRequired,
  removeUser: PropTypes.func.isRequired,
  updateUserData: PropTypes.func.isRequired,
};
