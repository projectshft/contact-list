import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const PageNotFound = () => <h1>Sorry, that page does not exist!</h1>;

const NewContact = () => <h1>Create a New Contact</h1>;

const Contact = () => <h1>Contact Page</h1>;

const ContactsList = ({ contacts }) => (
  <ul>
    {contacts.map((contactObj) => (
      <li>
        <h2>{contactObj.name}</h2>
        <img src={contactObj.image_url} alt={`${contactObj.name}'s Portrait`} />
        <h4>{contactObj.email}</h4>
        <h5>{contactObj.phone_number}</h5>
      </li>
    ))}
  </ul>
);

const Index = (props) => {
  const { contacts } = props;
  return (
    <Routes>
      <Route path="/" element={<ContactsList contacts={contacts} />} />
      <Route path=":contact_id" element={<Contact />} />
      <Route path="new" element={<NewContact />} />
    </Routes>
  );
};

Index.propTypes = PropTypes.object;

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
      <Route
        path="contacts/*"
        element={<Index contacts={appData.contacts} />}
      />
      <Route path=":anything_else" element={PageNotFound} />
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
