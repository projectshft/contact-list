import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import ContactList from './ContactList';
import ContactInfo from './ContactInfo';
import NewContact from './NewContact';

const App = () => (
  <div>
    <ContactList />
    <ContactInfo />
    <NewContact />
  </div>
);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
