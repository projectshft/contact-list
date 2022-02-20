import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const NewContact = () => <h1>Create a New Contact</h1>;

const Contact = () => <h1>Contact Page</h1>;

const ContactsList = () => (
  <div>
    <h1>All Contacts</h1>
  </div>
);

const Index = () => (
  <Routes>
    <Route path="/" element={<ContactsList />} />
    <Route path=":contact_id" element={<Contact />} />
    <Route path="new" element={<NewContact />} />
  </Routes>
);

const Homepage = () => (
  <div>
    <h2>Welcome to the Contact App!</h2>
  </div>
);

const App = () => {
  const [appData, setAppData] = useState({
    contacts: [
      {
        id: 70219577,
        name: 'Albert Einstein',
        image_url:
          'https://en.wikipedia.org/wiki/Albert_Einstein#/media/File:Einstein_1921_by_F_Schmutzer_-_restoration.jpg',
        email: 'aeinstein@example.com',
        phone_number: '15555555555',
      },
    ],
  });

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="contacts/*" element={<Index />} />
    </Routes>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
