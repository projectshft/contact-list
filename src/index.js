import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const NewContact = () => {};

const Contact = () => {};

const ContactsList = () => {};

const Index = () => (
  <Routes>
    <Route exact path="/contacts" component={ContactsList} />
    <Route path="/contacts/:contact_id" component={Contact} />
    <Route path="/contacts/new" component={NewContact} />
  </Routes>
);

const Homepage = () => <h2>Welcome to the Contact App!</h2>;

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
      <Route path="/" component={Homepage} />
      <Route path="/contacts" component={Index} />
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
