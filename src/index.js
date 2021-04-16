import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { BrowserRouter, Switch, Route, Link, useHistory } from 'react-router-dom';
import TestRender from './components/InputContact'


const App = () => (
    <div>
  <Main />
  </div> 
)

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={ContactsViewHeader}></Route>
      <Route path="/contact-form" component={TestRender}></Route>
    </Switch>
  </main>
)

const ContactsViewHeader = () => {
  return (
    <div className="heading"> 
    <h1 className="heading-title">Contacts</h1>
    <hr></hr>
    <button className="btn btn-primary">Add Contact</button>
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


