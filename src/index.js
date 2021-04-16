import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { BrowserRouter, Switch, Route, Link, useHistory } from 'react-router-dom';
import ContactForm from './components/Contact-Form'


const App = () => (
  <div>
   <Main name={}/>
  </div> 
)

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={ContactsViewHeader}></Route>
      <Route path="/contact-form" component={ContactForm}></Route>
    </Switch>
  </main>
)

const ContactsViewHeader = () => {

  let history = useHistory();
  return (
    <div className="heading"> 
    <h1 className="heading-title">Contacts</h1>
    <hr></hr>
    <button onClick={(e) => {history.push('/contact-form')}} className="btn btn-primary">Add Contact</button>
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


