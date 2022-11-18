import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Forms from './Forms';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const New = () => (
  <div>
    <Forms />
  </div>
);

const Contacts = () => (
<table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Profile Picture</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone Number</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
);

const Contact = () => (
  <h1>Contact</h1>
);


const Main = () => (
  <main>
    <Switch>
      <Route exact path="/contacts/new" component={New} />
      <Route path="/contacts" component={Contacts} />
      <Route path="/contact" component={Contact} />
    </Switch>
  </main>
);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Main />
    <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


