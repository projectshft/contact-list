import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
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
    { id: 1, image_url: 'https://www.looper.com/img/gallery/the-entire-history-of-dunes-house-atreides/intro-1602509817.jpg', name: 'Paul Atreides', email: 'muaddib@gmail.com', phone_number: '5555555' },
    { id: 2, image_url: 'https://dazedimg-dazedgroup.netdna-ssl.com/900/azure/dazed-prod/1310/1/1311717.jpg', name: 'Chani', email: 'fremen#1@gmail.com', phone_number: '2222222'}
  ], 
  all: function() {
    return this.contacts;
  },
  get: function(id) {
    const isContact = p => p.number === id;  //Confused as to how this is working.  Need ID in API
    return this.contacts.find(isContact);
  }
};




const AddCon = () => {
  return (
    <div className="add-contact">
      <AddContact />
    </div>
  );
}

const Contact = () => {
  return (
    <div className="selected-contact">
      <SelectedContact />
    </div>
  );
};



const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Index} />
      <Route path="/contacts/:id" component={Contact} />   
      <Route path="/addcontact" component={AddCon} />   
    </Switch>
  </main>
);

const AddContact = props => {     
  return (        
      <section>
          <h1>Add Contact</h1>
      <div>Full Name</div>
      <div className="name-input"><input /></div>
      <div>Email address</div>
      <div className="email-input"><input /></div>
      <div>Phone Number</div>
      <div className="phone-input"><input /></div>
      <div>Image URL</div>
      <div className="image-input"><input /></div>
      <hr/>
      <button>Confirm</button>
      </section>      
  )
};

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
        <tbody>
          <ContactList /> 
        </tbody>             
    </table> 
  </section>  
  );
}


const ContactList = props => {     
  const contactsArray = ContactAPI.contacts;
  const rows = [];

  for(let i = 0; i < contactsArray.length; i++) {
    rows.push(
      <tr>          
          <td><img src={contactsArray[i].image_url}></img></td>
          <td>{contactsArray[i].name}</td>
          <td>{contactsArray[i].email}</td>
          <td>{contactsArray[i].phone_number}</td>
      </tr>     
    )
  }
  console.log(rows);
  return rows;
  
};

const SelectedContact = props => {
  return <div>TODO</div>;
};



ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

/*

  */