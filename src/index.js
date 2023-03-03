import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ContactList from './components/contact_list';
import NewContact from './components/new';
import ContactInfo from './components/contact_info';


const App = () => (
  <div>
    <Header />
    <Main />
  </div>
);

const ContactsIndex = () => {
  return (
  <div>
    <ContactList />
  </div>
  )
}

const Header = () => {
  console.log('Hello World');
  return (
    <div className='page-header'>
      <h1>Contact List</h1>
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
