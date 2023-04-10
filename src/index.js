import { BrowserRouter, Switch, Route, Link, useHistory } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import data from "./data.json"
import PropTypes from 'prop-types';




const App = () => (
  <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/create' component={CreateNewContact}/>
    </Switch>
);

const Home = () => {
  return (
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <div className="page-header">
          <ContactList />
        </div>
      </div>
    </div>
  )
}

//list spans across bootstrap table components

function ContactList () {
 const [contacts, setContacts] = useState(data)
 const [addContactData, setAddContactData] = useState({
  img_url: "",
  name: "",
  phone: "",
  email: ""
 })
 

function handleAddContactData(e){
  e.preventDefault();

  const contactName = e.target.getAttribute("name")
  const contactValue = e.target.value

  //create our copy of the initial data object
  const newContactData = { ...addContactData};
  newContactData[contactName] = contactValue
 

  setAddContactData(newContactData)
}

const handleAddContactSubmit = (e) => {
  e.preventDefault();
  const generateId = () => Math.round(Math.random() * 100000000);

  

  const newContact = {
    id: generateId(),
    img_url: addContactData.img_url,
    name: addContactData.name,
    phone: addContactData.phone,
    email: addContactData.email
  }

  const newContacts = [...contacts, newContact];
  setContacts(newContacts)
}

// const handleClickToNew = () => (<div><Link to='/create'></Link></div>)
const history = useHistory();

  const newContactPage = () => {
    history.push('/create')
  }

return (
  <div>
    <h1>Contact List</h1>
    <button onClick={newContactPage} className="btn btn-primary">Create New Contact</button>
    {contacts.map((contact)=> 
    <ul className="list-group" key={contact.id}>
    <li className="list-group-item">{contact.img} - {contact.name} - {contact.phone} - {contact.email}</li>
    </ul>
  )}<Switch>
    <CreateNewContact handleAddContactData={handleAddContactData} handleAddContactSubmit={handleAddContactSubmit}/>        
    </Switch>
  </div>       
  )
}

function CreateNewContact ({handleAddContactData, handleAddContactSubmit}) {

  const history = useHistory();

  const returnHome = () => {
    history.push('/')
  }

  return(
    <div className="row">
    <div className="col-md-6 offset-md-3">
    <div className="page-header">
    <h1>Make a new Contact</h1>
    <div>
      
    <input 
    type='text'
    name="name"
    placeholder='Name'
    onChange={handleAddContactData}
    required="required"
    />
    
    </div>
    <div>
    <input 
    type='text'
    name="phone"
    placeholder='Phone Number'
    onChange={handleAddContactData}
    required="required"
    />
    </div>
    <div>
    <input 
    type='email'
    name="email"
    placeholder='Email'
    onChange={handleAddContactData}
    required="required"
    />
    </div>

    <button onClick={handleAddContactSubmit} type="button" className="btn btn-primary add-post">Add Contact</button> 
    
    </div>
  </div>
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