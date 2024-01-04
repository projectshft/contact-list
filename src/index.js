import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import "./index.css";

import data from "./data.json";
import New from "./New";

//App renders the routes to each page and the state of the contact list
const App = () => {
  const [contacts] = useState(data);

  console.log("contacts", contacts);
  return (
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <Switch>
          <Route exact path="/" component={List} />
          <Route path="/create" component={New} />
          <Route path="/:id" component={Contact} />
        </Switch>
      </div>
    </div>
  );
};

//ContactAPI contains our json information for each contact in the list
const ContactAPI = {
  contacts: data.contacts,
  all: function () {
    return this.contacts;
  },
  get: function (id) {
    const isContact = (contact) => contact.id === id;
    return this.contacts.find(isContact);
  },
};

//Contact component renders the single page of an individual contact
const Contact = (props) => {
  const contact = ContactAPI.get(parseInt(props.match.params.id, 10));
  if (!contact) {
    return (
      <div>
        <h3>Could not find contact</h3>
        <Link to={"/"}>Contacts</Link>
      </div>
    );
  }
  return (
    <div>
      <img alt='' src={contact.image_url}></img>
      <h1>{contact.name}</h1>
      <h2> {contact.phone_number}</h2>
      <h2> {contact.email}</h2>
      <Link to={"/"}>Contacts</Link>
    </div>
  );
};

//List renders our table of contacts
const List = () => {
  const history = useHistory();

  function handleClick(row) {
    history.push(`/${row.id}`);
  }

  return (
    <div>
      <h1>Contact List</h1>
      <br />
      <Link to={"/create"}>
        <button className="btn btn-primary">Add New</button>
      </Link>
      <br />
      <table className="table table-hover table-striped">
        <thead>
          <tr>
            <th>Profile</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {ContactAPI.all().map((contact) => (
            <tr key={contact.id} onClick={() => handleClick(contact)}>
              <td><img alt='' src={contact.image_url}></img></td>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.phone_number}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);