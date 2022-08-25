import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import AddContact from '..\components\AddContact.js'

const App = () => {
  return (
    <div className="col-md-6 offset-md-3 text-center">
      <Header/>
      <Main/>
    </div>
  );
};


const AddContact = (props) => {
  const [imageURL, setImageURL] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  
  const generateId = () => Math.round(Math.random() * 100000000);

  const resetFields = () => {
    setImageURL('');
    setName('');
    setEmail('');
    setNumber('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newContact = {
      id: generateId(),
      profilePic: imageURL,
      name: name,
      email: email,
      phoneNumer: number,
    };
    props.addContactHandler(newContact);
    resetFields();
  }

  return (
    <div>
      <h1>Add New Contact</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label for="InputImg">Profile Picture</label>
          <input type="text" className="form-control" id="InputImg" placeholder="Enter Image URL" value={imageURL} onChange={(e)=> setImageURL(e.target.value)}/>
        </div>
        <div className="form-group">
          <label for="inputName">Enter Name</label>
          <input type="text" className="form-control" id="inputName" placeholder="Name" value={name} onChange={(e)=> setName(e.target.value)}/>
        </div>
        <div className="form-group">
          <label for="InputEmail">Email address</label>
          <input type="email" className="form-control" id="InputEmail" aria-describedby="addContact" placeholder="Enter email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
        </div>
        <div className="form-group">
          <label for="inputPhoneNumber">Enter Phone Number</label>
          <input type="text" className="form-control" id="inputPhoneNumber" placeholder="Phone Number" value={number} onChange={(e)=> setNumber(e.target.value)}/>
        </div>
        <button type="submit" className="btn btn-primary submit-contact">Add Contact</button>
        <Link to={`/`}>Back to Contacts</Link>
      </form>
      <Contacts/>
    </div>
  )
}; 


const Contacts = () => {


  return (
    <div>
      <Link to={`/newcontact`}>Add New Contact</Link>
      <table className="table table-bordered">
          <thead>
            <tr>
              <th>Profile Pic</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {ContactAPI.all().map(p => (
              <tr key={p.id}>
                <td><img src={p.profilePic} alt='profile pic' className='rounded img-thumbnail'></img></td>
                <td><Link to={`/${p.id}`}>{p.name}</Link></td>
                <td>{p.email}</td>
                <td>{p.phoneNumer}</td>
              </tr>
            ))} 
          </tbody>
      </table>
    </div>
  );
};


const Contact = props => {
  const contact = ContactAPI.get(parseInt(props.match.params.id, 10));
  if (!contact) {
    return <div>Sorry, but the contact was not found</div>;
  }
  return (
    <div>
      <img src={contact.profilePic} alt="..." className="img-thumbnail"></img>
      <h1>
        {contact.name} (#{contact.id})
      </h1>
      <h2>email: {contact.email}</h2>
      <Link to="/">Back</Link>
    </div>
  );
};


const ContactAPI = {
  contacts: [
    { id: 1, name: 'Daniel Bui', email: 'dnlbui@protonmail.com', phoneNumer: '8174238623', profilePic: `https://cdn-icons-png.flaticon.com/512/3135/3135715.png` }
  ],
  all: function() {
    return this.contacts;
  },
  get: function(id) {
    const isContact = p => p.id === id;
    return this.contacts.find(isContact);
  }
};

const Header = () => (
  <header>
    <h1>Contacts</h1>
  </header>
);

const Main = () => {
  const [contacts, setContacts] = useState([ContactAPI.contacts]);
  
  const addContactHandler = (contact) => {
    console.log(contact);
    console.log(contacts);
    setContacts({...contacts},{contact})
    ContactAPI.contacts.push(contact);
  }
  
  return(
  <main>
    <Switch>
      <Route exact path="/" component={Contacts} />
      <Route>
        <AddContact addContactHandler={addContactHandler} />
      </Route>
      <Route path="/:id" component={Contact} />
    </Switch>
  </main>
  )
};


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
