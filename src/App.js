import React from 'react';
import './App.css';
import Main from './Main';

const Header = () => {
  return (
    <div className="col-md-5 offset-md-3">
      <div className="row">
        <h1 className="text-center">Contact List</h1>
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="container">
        <Header />
        <Main /> 
    </div>
  );
}

export default App;

// todos
// require fields before submission
// add click to naviagate to individual contact
