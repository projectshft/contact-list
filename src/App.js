import './App.css';
import { useState } from 'react';
import PropTypes from 'prop-types';
import AddForm from './components/add_form';

function App() {
  const [contacts, setContacts] = useState([]);

  const addContact = function (contact) {
    setContacts(...contacts[contact]);
  };

  return (
    <div className="App">
      <AddForm />
    </div>
  );
}

App.protoTypes = {
  addContact: PropTypes.function.isRequired,
};

export default App;
