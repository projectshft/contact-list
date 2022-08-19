import { Routes, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Contact from './Contact';
import FullContacts from './FullContacts';
import NewContact from './NewContact';

const Contacts = ({ addUser, users }) => (
  <Routes>
    <Route index element={<FullContacts users={users} />} />
    <Route path="new" element={<NewContact addUser={addUser} />} />
    <Route path=":id" element={<Contact users={users} />} />
  </Routes>
);

export default Contacts;
Contacts.propTypes = {
  users: PropTypes.array.isRequired,
  addUser: PropTypes.func.isRequired,
};
