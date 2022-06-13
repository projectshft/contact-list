import React from 'react';
import { Link } from 'react-router-dom';

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
    </div>
  )
}

export default App;
