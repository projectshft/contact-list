import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ContactList from './components/contact_list';
import NewContact from './components/new';
import ContactInfo from './components/contact_info';
import axios from "axios";


class App extends Component {
  constructor () {
    super()

    this.state = {
      contacts: []
    }

    this.addContact = this.addContact.bind(this)
  }
  componentDidMount() {
    axios.get('./data.json')
    .then(response => {
      console.log(response.data.contacts);
      this.setState({contacts: response.data.contacts});

    })
    .catch(error => {
      console.error(error);
    });
  }
 
  addContact (contact) {
    this.setState({contacts: this.state.contacts.concat([contact])})
  }
  render() {

    const Main = () => (
      <main>
        <Switch>
          <Route exact path="/contacts" component={ContactsIndex} />
          <Route path="/contacts/id" component={ContactInfo} />
          <Route path="/contacts/new" render= {(props) => (<NewContact addContact={this.addContact} contacts={this.state.contacts} {...props} />)} />
        </Switch>
      </main>
    );

    const ContactsIndex = () => (
      <Switch>
        <Route exact path="/contacts" render={(props) => (<ContactList contacts={this.state.contacts} {...props} />)} />
        <Route  path="/contacts/:id" component={ContactInfo}/>
      </Switch>
      )

    return (
      <div>
        <Header />
        <Main />
      </div>
    )
  }
};

// const ContactsIndex = () => {
//   return (
//   <div>
//     <ContactList contacts={contacts}/>
//   </div>
//   )
// }

const Header = () => {
  return (
    <div className='page-header'>
      <h1>Contact List</h1>
      <hr/>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);