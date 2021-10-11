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
      <Route path="/addcontact" component={AddCon} />   
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
                <th scope="col" id="view-link">Profile Link</th>
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

const Contact = (key) => {  
  return (
    <div className="selected-contact">
      <SelectedContact />
    </div>
  );
};

const AddCon = () => {
  return (
    <div className="add-contact">
      <AddContact />
    </div>
  );
}

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

const SelectedContact = props => {
  const contact = ContactAPI.get(parseInt(props.match.params.id, 10));  
  //const player = PlayerAPI.get(parseInt(props.match.params.number, 10));  code from Module example

  if (!contact) {
    return <div>Contact does not exist</div>;
  }  
  return (
    <section>
      <h1>Selected Contact</h1>
      <div>TODO</div>
      <div></div>
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
const contactsArray = ContactAPI.contacts;
  const rows = [];  
  

  for(let i = 0; i < contactsArray.length; i++) {
    rows.push(
      <tr key={i}>                  
          <td><Link to={'/contacts/${i}'}>View Profile</Link></td>
          <td><img src={contactsArray[i].image_url}></img></td>
          <td>{contactsArray[i].name}</td>
          <td>{contactsArray[i].email}</td>
          <td>{contactsArray[i].phone_number}</td>
      </tr> 
        
    )
  }  
  return rows;


  <td><Link to={'/contacts/${rows.id}'}>View Profile</Link></td>

  */