import React from "react";
import {Routes, Route} from 'react-router-dom';
import ContactsList from './components/contactsList';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h1>Contacts List</h1>
          <hr/>
          <Routes>
            <Route path="/" element={<ContactsList />}/>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
