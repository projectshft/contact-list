import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import NewContact from './components/new';
// import Contact from './components/contact';


const App = () => (
  <div>
    <Header />
    <Main />
  </div>
);

const ContactsIndex = () => <h1>List of Contacts</h1>;

const Person = () => <h1>Person's Contact Info</h1>;

const NewContact = () => <h1>Add a Contact Here</h1>;

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
      <Route path="/contacts/person" component={Person} />
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
