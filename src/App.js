import React from 'react';
import { 
  Routes, 
  Route, 
  Link } from 'react-router-dom';
import AddContact from './components/AddContact';

const App = () => {


  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12'>
          <h1>React Contact List</h1>
        </div>
      </div> 
      <div className='row'>
        <div className='col'>
          <Link to="/add-contact">
            <button id='add-contact-btn' className='btn btn-primary'>Add Contact</button>
          </Link>
        </div>
      </div>
      <Routes>
        <Route path="/add-contact" element={<AddContact />}></Route>
      </Routes>
    </div>
  )
}

export default App;
