import { BrowserRouter, Switch, Route, Link, withRouter } from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import './index.css';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <div>
    <Main />
  </div>
);

const ContactAPI = {
  contacts: [
    { id: 0, image_url: 'https://www.looper.com/img/gallery/the-entire-history-of-dunes-house-atreides/intro-1602509817.jpg', name: 'Paul Atreides', email: 'muaddib@gmail.com', phone_number: '5555555' },
    { id: 1, image_url: 'https://dazedimg-dazedgroup.netdna-ssl.com/900/azure/dazed-prod/1310/1/1311717.jpg', name: 'Chani', email: 'fremen#1@gmail.com', phone_number: '2222222'}
  ], 
  all: function() {
    return this.contacts;
  },
  get: function(key) {
    const isContact = p => p.id === key;  
    return this.contacts.find(isContact);  
  }
};



const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Index} />
      <Route path="/contacts/:id" component={Contact} />   
      <Route path="/addcontact" component={AddContact} />   
    </Switch>
  </main>
);

const Index = () => {
  return (
    <section>
    <Link to="/addcontact">Add Contact</Link>
    <table class="table">
        <thead>
            <tr>                
                <th scope="col" id="pic-column">Profile Pic</th>
                <th scope="col" id="name-column">Name</th>
                <th scope="col" id="email-column">Email</th>
                <th scope="col" id="phone-column">Phone Number</th>
            </tr>
        </thead> 
        
          <ContactList /> 
                     
    </table> 
  </section>  
  );
}

const AddContact = props => {     
  const generateID = () => (ContactAPI.contacts.length - 1);
 
  const newContact = {id: null, image_url: null, name: null, email: null, phone_number: null};

  function handleNameChange(e) {
    newContact.name = e.target.value;
  }

  function handleEmailChange(e) {
    newContact.email = e.target.value;
  }

  function handlePhoneChange(e) {
    newContact.phone_number = e.target.value;
  }

  function handleImageChange(e) {
    newContact.image_url = e.target.value;
  }
  
  
  return (        
      <section>
          <h1>Add Contact</h1>
      <div>Full Name</div>
      <div className="name-input">
        <input onChange={handleNameChange} />        
      </div>     
      <div>Email address</div>
      <div className="email-input">
        <input onChange={handleEmailChange}/>          
      </div>
      <div>Phone Number</div>
      <div className="phone-input">
        <input onChange={handlePhoneChange}/>
      </div>
      <div>Image URL</div>
      <div className="image-input">
        <input onChange={handleImageChange}/>
      </div>
      <hr/>
      <Link to={`/`} className="button-link">
        <button onClick={handleButtonClick}>Confirm</button>
      </Link>
      </section>      
  )

  function handleButtonClick() {
    console.log('Button Clicked');
    
    ContactAPI.contacts.push(newContact);  
    console.log(ContactAPI.contacts)
  }
  
  

};

const ContactList = () => {     
  return (
  <tbody>
  {ContactAPI.all().map(rows => (  //Using map will loop through the entire array and display all inherently?
    <Link to={`/contacts/${rows.id}`} key={rows.id} className="table-row">               
          <td><img src={rows.image_url}></img></td>
          <td>{rows.name}</td>
          <td>{rows.email}</td>
          <td>{rows.phone_number}</td>
      </Link> 
  ))}
  </tbody>
  )
  
};

const Contact = (props) => {  
  const contact = ContactAPI.get(parseInt(props.match.params.id, 10));    

  if (!contact) {
    return <div>Contact does not exist</div>;
  }  
  return (
    <section>
      <h1>{contact.name}</h1>
      <div><img src={contact.image_url}></img></div>
      <div>{contact.email}</div>
      <div>{contact.phone_number}</div>
    </section>
  )
};

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

/*  
function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleEmailChange() {

  }

  function handlePhoneNumChange() {

  }

  function handleImageURLChange() {

  }
  */