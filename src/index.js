//  Show the user a list of all of their contacts. "Index page" Make sure it has its own route
// Add a new contact with a name, image, email and phone number
// Use Prototypes

// Routes that will be needed. Index, adding a contact, individual contacts,
// The add contact button will route to the add contact page
// We will need a type form for user input to add a contact
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Outlet, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const App = () => (
  <BrowserRouter>
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Index" element={<Index />} />
        <Route path="/AddContact" element={<AddContact />} />
      </Routes>
    </div>
  </BrowserRouter>
);

const Home = () => <h1>Welcome to The Contact List </h1>;

const Main = () => (
  <main>
    <Outlet />
  </main>
);

const Index = () => (
  <main>
    <h1>Contact List</h1>
    <hr />
    <div>
      <button type="button" className="btn btn-dark">
        Add Contact
      </button>
    </div>
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

const AddContact = () => <h1>Hello</h1>;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

export default App;
