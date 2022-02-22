import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Index from './components/Index.js';
import NewContact from './components/NewContact.js';
import PageNotFound from './components/Error.js';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Homepage = () => (
  <div>
    <h2>Welcome to the Contact App!</h2>
    <Link to="/contacts">See all Contacts</Link>
  </div>
);

const App = () => {
  const [appData, setAppData] = useState({
    contacts: [
      {
        id: 70219577,
        name: 'Albert Einstein',
        image_url:
          'https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2015/6/9/1433860888503/Albert-Einstein.--009.jpg?width=620&quality=85&auto=format&fit=max&s=d58555b85b113c5723e8d3ae7cef8ba2',
        email: 'aeinstein@example.com',
        phone_number: '15555555555',
      },
      {
        id: 843749054,
        name: 'Aristotle',
        image_url:
          'https://images.saymedia-content.com/.image/c_limit%2Ccs_srgb%2Cq_auto:eco%2Cw_700/MTczODE2MzM1MTM3MTg3NDY3/compaison-of-plato-and-aristotle.webp',
        email: 'aristotle@greekphilosophersociety.org',
        phone_number: '37689098767839',
      },
    ],
  });

  const generateRandomId = () => Math.floor(Math.random() * 100000000);

  const addNewContact = (contactInfo) => {
    contactInfo.id = generateRandomId();

    const updatedContacts = [...appData.contacts];
    updatedContacts.push(contactInfo);
    setAppData({ ...appData, contacts: updatedContacts });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-2" />
        <div className="col-md-8 text-center">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route
              path="contacts/*"
              element={
                <Index contacts={appData.contacts}>
                  <Route
                    path="new"
                    element={<NewContact addNewContact={addNewContact} />}
                  />
                </Index>
              }
            />
            <Route path=":anything_else" element={PageNotFound} />
          </Routes>
        </div>
        <div className="col-md-2" />
      </div>
    </div>
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
