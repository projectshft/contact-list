// index.js is at the top of the hierarchy of components
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


//  render data over to the index.html page through 'root'
//  App.js gets rendered in on Line 13
//  Any time you have a React app, you have ReactDOM.render
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


//  A Contact List page that will intake Full Name, Email address, Phone Number, Image URL  --  all this with an Add Contact button
//  A rendered Contact List page that includes all of this information in a list
//  Data needs to be stored somewhere (such as in an array)
