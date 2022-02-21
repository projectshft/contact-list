// {contacts.map((contactObj) => (
//   <li>
//     <h2>{contactObj.name}</h2>
//     <img src={contactObj.image_url} alt={`${contactObj.name}'s Portrait`} />
//     <h4>{contactObj.email}</h4>
//     <h5>{contactObj.phone_number}</h5>
//   </li>
// ))}

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Route,
  Routes,
  Link,
  useParams,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// ------------------
// ------------------
// ------------------
// ------------------

const PageNotFound = () => <h1>Sorry, that page does not exist!</h1>;

const NewContact = () => <h1>Create a New Contact</h1>;

const Contact = ({ contacts }) => {
  const params = useParams();

  const currentContact = contacts.find(
    (entry) => entry.id === parseInt(params.contact_id)
  );

  return (
    <div className="contact-page">
      <h1>{currentContact.name}</h1>
      <img src={currentContact.image_url} alt="test" />
      <h4>{currentContact.email}</h4>
      <h4>{currentContact.phone_number}</h4>
    </div>
  );
};

const ContactsList = (props) => {
  const { contacts } = props;

  const contactsListDisplay = contacts.map((contact) => (
    <div key={contact.id} className="contact-list-item">
      <Link to={`/contacts/${contact.id}`}>
        <img src={`${contact.image_url}`} alt="_test_" />
      </Link>
      <h2>{contact.name}</h2>
    </div>
  ));

  return <div className="contact-list">{contactsListDisplay}</div>;
};

const Index = (props) => {
  const { contacts } = props;
  debugger;
  return (
    <Routes>
      <Route path="/" element={<ContactsList contacts={contacts} />} />
      <Route path=":contact_id" element={<Contact contacts={contacts} />} />
      <Route path="new" element={<NewContact />} />
    </Routes>
  );
};

Contact.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Index.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

// ------------------
// ------------------
// ------------------

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
