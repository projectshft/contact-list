import PropTypes from 'prop-types';
import { Routes, Route } from 'react-router-dom';
import ContactList from './ContactList';
import ContactCard from './ContactCard';
import AddContact from './AddContact';

const Main = ({ contacts, addContact, deleteContact }) => (
  <main>
    <Routes>
      <Route
        path="/"
        element={
          <ContactList contacts={contacts} deleteContact={deleteContact} />
        }
      />
      <Route
        path="contacts/:id"
        element={<ContactCard contacts={contacts} />}
      />
      <Route
        path="contacts/add"
        element={<AddContact addContact={addContact} />}
      />
    </Routes>
  </main>
);

Main.propTypes = {
  addContact: PropTypes.func,
  deleteContact: PropTypes.func,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image_url: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ),
};

export default Main;
