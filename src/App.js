import React from 'react';
import './App.css';
import Contacts from './Contacts';

const Header = () => <div>Contact List</div>;

function App() {
  return (
    <div>
      <Header />
      <Contacts /> 
    </div>
  );
}

export default App;
