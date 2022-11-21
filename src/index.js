import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Forms from './Forms';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


const Home = () => {
  return (
  <Switch>
  <div>
    <h1>Contact List </h1>
    <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Profile Pic</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone Number</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">
sick Pic
      </th>
      <td>Patrick Bateman</td>
      <td>email@false.com</td>
      <td>5554445522</td>
    </tr>
    <tr>
      <th scope="row">
please picture
      </th>
      <td>Billy Suthers</td>
      <td>better@gmail.com</td>
      <td>1213334444</td>
    </tr>
    <tr>
      <th scope="row">
great pic
      </th>
      <td>Bruce Wayne</td>
      <td>best@yahoo.com</td>
      <td>5554445522</td>
    </tr>
  </tbody>
</table>
  </div>
  </Switch>
  )
};

const Contacts = () => {
  return(
  <Switch>
    {/* <Route exact path="/Contacts" component={FullList} /> */}
    <div>
      <Forms />
    </div>
    {/* <Forms /> */}
    {/* <Route path="/Contacts/:contact" component={Person} /> */}
  </Switch>
  )
  };

  // const generateId = () => Math.round(Math.random() * 100000000);


  const Contact = () => {
    return (
  <Switch>
  <div>
    <App />
  </div>
  </Switch>
    )
  };


const Main = () => (
  <main>
    <Switch>
    <Route exact path="/" component={Home} />
      <Route path="/contacts/new" component={Contacts} />
      <Route path="/contact" component={Contact} />
    </Switch>
  </main>
);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Main />
    {/* <App /> */}
    {/* <Forms /> */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


