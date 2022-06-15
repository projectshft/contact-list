import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import DisplayedList from './components/DisplayedList';
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
          <Link to="/add-contact/*">
            <button id='add-contact-btn' className='btn btn-primary'>Add Contact</button>
          </Link>
        </div>
      </div>
      <Routes>
        <Route exact path="/" element={ <App /> }/>
        <Route path="/diplayed-list" element={<DisplayedList />} />
        <Route path="/add-contact/*" element={<AddContact />}></Route>
      </Routes>
    </div>
  )
}

export default App;
