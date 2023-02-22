import { Routes, Route } from 'react-router-dom';
import './App.css';

import ContactList from './components/ContactList';
import AddContactForm from './components/AddContactForm';

const App = () => (
  <main>
    <Routes>
      <Route exact path="/" element={<ContactList />} />
      <Route path="/add_contact_form" element={<AddContactForm />} />
    </Routes>
  </main>
);

export default App;
