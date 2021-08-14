import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import ContactNew from './components/contact_new';
import Contact from './components/contact';

const testData = {
  "contacts": [
    {
      "id": 70219577,
      "name": "Albert Einstein",
      "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Einstein_1921_by_F_Schmutzer_-_restoration.jpg/800px-Einstein_1921_by_F_Schmutzer_-_restoration.jpg",
      "email": "aeinstein@example.com",
      "phone_number": "15555555555"
    }
  ]
};

const App = () => (
  <main>
    <h1 className="text-center">Contact List</h1>
    <Switch>
      <Route exact path="/" component={Index} />
      <Route path="/contacts/new" render={() => (
        <ContactNew clickHandler={addContact} />
      )} />
      <Route path="/contacts/:id" component={Contact} />
    </Switch>
  </main>
);

const addContact = (contact) => {
  console.log('click!!!');
}

const Index = () => {

  const [contacts, setContacts] = useState([]);

  return(
  <div>
    <div className="container">
      <Link to="/contacts/new" type="button" className="btn btn-primary">Add Contact</Link>
      <Link to="contacts/id" type="button" className="btn btn-warning">Ind. Page</Link>
    <table className="table table-bordered table-hover">
    <thead className="table table-light">
      <tr>
        <th scope="col">Profile Pic</th>
        <th scope="col">Name</th>
        <th scope="col">Email</th>
        <th scope="col">Phone Number</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><img src={testData.contacts[0].image_url} className="prof-pic" alt=""></img></td>
        <td>{testData.contacts[0].name}</td>
        <td>{testData.contacts[0].email}</td>
        <td>{testData.contacts[0].phone_number}</td>
      </tr>
    </tbody>
  </table>
  </div>
</div>
  )
};

ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);
