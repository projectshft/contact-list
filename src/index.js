// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';

// const App = () => (
//   <div>
//     <Main />
//   </div>
// );

// const Home = () => (
//   <div>
//     <h1>Contact List</h1>
//   </div>
// );
// const person = {
//   contact: [
//     {
//       "id": 70219577,
//       "name": "Albert Einstein",
//       "image_url": "https://en.wikipedia.org/wiki/Albert_Einstein#/media/File:Einstein_1921_by_F_Schmutzer_-_restoration.jpg",
//       "email": "aeinstein@example.com",
//       "phone_number": "15555555555"
//     },
//   ],
//   all: function() {
//     return this.contact;
//   },
//   get: function(id) {
//     const isContact = p => p.number === id;
//     return this.contact.find(isContact);
//   }
// }

// const newContact = () => <h1>Add Contact</h1>;

// const Contact = () => <h1>Contact</h1>;

// const Main = () => (
//   <main>
//     <Switch>
//       <Route exact path="/contact" component={Home} />
//       <Route exact path="/contact/new" component={newContact} />
//       <Route exact path="/contact/{id of contact}" component={Contact} />
//     </Switch>
//   </main>
// );

// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);