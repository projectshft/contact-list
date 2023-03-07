import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ContactList from './components/contact_list';
import NewContact from './components/new';
import ContactInfo from './components/contact_info';
import axios from "axios";


const App = () => {
  const [contacts, setContacts] = useState([]);

  const addContact = (contact) => {
    setContacts(contacts.concat(contact));
  }

  const fetchContacts = () => {
    axios.get('./data.json')
    .then(response => {
      console.log(response);
      setContacts(response.data.contacts);
    })
    .catch(error => {
      console.error(error);
    });
  }

  React.useEffect(() => fetchContacts(), []);

  return (
    <div>
      <Header />
      <Main />
    </div>
  )
};

const ContactsIndex = () => {
  return (
  <div>
    <ContactList />
  </div>
  )
}

const Header = () => {
  return (
    <div className='page-header'>
      <h1>Contact List</h1>
      <hr/>
    </div>
  )
}

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/contacts" component={ContactsIndex} />
      <Route path="/contacts/id" component={ContactInfo} />
      <Route path="/contacts/new" component={NewContact} />
    </Switch>
  </main>
);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
