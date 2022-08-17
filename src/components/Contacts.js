import { Routes, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Contact from './Contact';
import FullContacts from './FullContacts';
import NewContact from './NewContact';

const Contacts = ({ users }) => (
  <Routes>
    <Route index element={<FullContacts />} />
    <Route path="new" element={<NewContact />} />
    <Route path=":id" element={<Contact />} />
  </Routes>
);

export default Contacts;

Contacts.propTypes = {
  users: PropTypes.array.isRequired,
};
