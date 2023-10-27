import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './HomePage';
import AddContactForm from './AddContactForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Index from './AllContacts';
import ContactPage from './ContactPage';

const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) || [
      {
        id: 1980,
        name: 'Jason Voorhees',
        email: 'J.Voorhees@campclmail.com',
        phone: 5550123,
        image:
          'https://upload.wikimedia.org/wikipedia/en/f/f7/Jason_Voorhees_%28Ken_Kirzinger%29.jpg',
      },
      {
        id: 1984,
        name: 'Freddy Kreuger',
        email: 'nghtmronelmstreet@gmail.com',
        phone: 8675309,
        image:
          'https://upload.wikimedia.org/wikipedia/en/e/eb/Freddy_Krueger_%28Robert_Englund%29.jpg',
      },
      {
        id: 1990,
        name: 'PennyWise',
        email: 'timetofloat@derrymail.com',
        phone: 1234564,
        image:
          'https://gray-wwny-prod.cdn.arcpublishing.com/resizer/rnbmO_5GqgZXHTY9VOZzMQ3_V1M=/1200x1800/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/WQCWCUYTCBEBNOVPMEYPRQJCSI.jpg',
      },
    ]
  );

  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  const updateContact = (data) => {
    try {
      localStorage.setItem('contacts', JSON.stringify(data));
    } catch (error) {
      console.error('Cannot Store Contact', error);
    }
  };

  useEffect(() => {
    updateContact(contacts);
  }, [contacts]);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Index" element={<Index contacts={contacts} />} />
        <Route
          path="/Index/:id"
          element={<ContactPage contacts={contacts} />}
        />
        <Route
          path="/AddContact"
          element={
            <AddContactForm addContact={addContact} setContacts={setContacts} />
          }
        />
        <Route
          path="*"
          element={
            <div>
              <h1>Not Found</h1>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

export default App;
