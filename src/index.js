//  Show the user a list of all of their contacts. "Index page" Make sure it has its own route
// Add a new contact with a name, image, email and phone number
// Use Prototypes

// Routes that will be needed. Index, adding a contact, individual contacts,
// The add contact button will route to the add contact page
// We will need a type form for user input to add a contact
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Outlet, Routes, Route, Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const App = () => (
  <BrowserRouter>
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Index" element={<Index />} />
        <Route path="AddContact" element={<AddContact />} />
      </Routes>
    </div>
  </BrowserRouter>
);

const Home = () => (
  <div>
    <h1>Welcome to The Contact List! </h1>
    <hr />
    <div />
    <Link to="/Index">
      <button type="button" className="btn btn-dark index-btn">
        Open the Contact Index
      </button>
    </Link>
    <div>
      <Link to="AddContact">
        <button type="button" className="btn btn-dark addcontact-btn">
          Add Contact
        </button>
      </Link>
    </div>
  </div>
);

const Index = () => (
  <main>
    <h1>Contact List</h1>
    <hr />
    <table className="table table-bordered">
      <thead className="table-dark">
        <tr>
          <th scope="col">Avatar</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Phone Number</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark Otto</td>
          <td>Ottoman32@gmail.com</td>
          <td>5550123</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob Thorton</td>
          <td>ThorntonJ@gmail.com</td>
          <td>8675309</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Jon Layman</td>
          <td>LaymanJ@gmail.com</td>
          <td>1234564</td>
        </tr>
      </tbody>
    </table>
  </main>
);

const AddContact = () => (
  <div className="container">
    <div className="row">
      <div className="col-md-6 offset-3">
        <div className="page-header">
          <h1>Add Contact</h1>
          <hr />
        </div>
        <label htmlFor="Full Name" className="form-label">
          Full Name
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="First and Last Name"
        />
        <br />
      </div>
      <div className="col-md-6 offset-3">
        <label htmlFor="Email Address" className="form-label">
          Email Address
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="Email Address"
        />
        <br />
      </div>
      <div className="col-md-6 offset-3">
        <label htmlFor="Phone Number" className="form-label">
          Phone Number
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="Phone Number"
        />
        <br />
      </div>
      <div className="col-md-6 offset-3">
        <label htmlFor="Image Url" className="form-label">
          Image URL
        </label>
        <input type="text" className="form-control" placeholder="Image URL" />
        <br />
      </div>
    </div>
    <button type="button" className="btn btn-dark addcontact2-btn">
      Add Contact
    </button>
  </div>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

export default App;
