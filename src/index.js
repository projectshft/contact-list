// Use Prototypes

// Routes that will be needed. Index, adding a contact, individual contacts,
// The add contact button will route to the add contact page
// We will need a type form for user input to add a contact
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './HomePage';
import AddContactForm from './AddContactForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Index from './AllContacts';

const App = () => {
  const [contacts, setContacts] = useState([
    {
      name: 'Jason Voorhees',
      email: 'J.Voorhees@campclmail.com',
      phone: 5550123,
      image:
        'https://upload.wikimedia.org/wikipedia/en/f/f7/Jason_Voorhees_%28Ken_Kirzinger%29.jpg',
    },
    {
      name: 'Freddy Kreuger',
      email: 'nghtmronelmstreet@gmail.com',
      phone: 8675309,
      image:
        'https://upload.wikimedia.org/wikipedia/en/e/eb/Freddy_Krueger_%28Robert_Englund%29.jpg',
    },
    {
      name: 'PennyWise',
      email: 'timetofloat@derrymail.com',
      phone: 1234564,
      image:
        'https://gray-wwny-prod.cdn.arcpublishing.com/resizer/rnbmO_5GqgZXHTY9VOZzMQ3_V1M=/1200x1800/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/WQCWCUYTCBEBNOVPMEYPRQJCSI.jpg',
    },
  ]);

  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };
  console.log(contacts);
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
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Index" element={<Index contacts={contacts} />} />
          <Route
            path="/AddContact"
            element={
              <AddContactForm
                addContact={addContact}
                setContacts={setContacts}
              />
            }
          />
        </Routes>
      </div>
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
