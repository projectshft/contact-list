import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContactsList from './components/ContactsList';
import NewContact from './components/NewContact';
import ShowContact from './components/ShowContact';

//App component
const App = () => (
  <div>
    <Main />
  </div>
)
//Create contacts state. An array that will have objects added to it.
const Main = () => {
  const [contacts, setContacts] = useState([]);

  const handleAddContacts = (contact) => {
    setContacts(prevState => [...prevState, contact])
  }

  return (
    <Routes>
      <Route exact path="/" element={<ContactsList contacts={contacts} />} />
      <Route path="/new" element={<NewContact onSubmit={handleAddContacts}/>} />
      <Route path="/contacts/:number" element={<ShowContact contacts={contacts} />} />
    </Routes>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
