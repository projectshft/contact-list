import { useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Main from './Main';
import defaultContacts from './contacts.json';

const App = () => {
  const [contacts, setContacts] = useState(defaultContacts.contacts);

  return (
  <div>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Main contacts={contacts}/>} />
      </Routes>
    </BrowserRouter>
  </div>
  );
};

export default App;
