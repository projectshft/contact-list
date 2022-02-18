import React from 'react';
import './App.css';
import Contacts from './Contacts';

const Header = () => (
  <h1 className="text-center">Contact List</h1>
);

function App() {
  return (
    <div className="container">
      <div className="col-md-5 offset-md-3">
        <div className="row">
          <Header />
          <Contacts /> 
        </div> 
      </div>
    </div>
  );
}

export default App;
