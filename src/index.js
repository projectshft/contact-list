import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => (
  <div>
    <Main />
  </div>
);

const ContactList = {
  contacts: [
    {
      id: 1,
      name: 'Ironman',
      email: 'ironman@avengershq.com',
      phone: '55512345679',
      image: 'https://cdn.britannica.com/49/182849-050-4C7FE34F/scene-Iron-Man.jpg'
    },
    {
      id: 2,
      name: 'Captain Marvel',
      email: 'captain@marvel.com',
      phone: '9099876543',
      image: 'https://upload.wikimedia.org/wikipedia/en/f/f1/Brie_Larson_as_Carol_Danvers.jpeg'
    }
  ], 
  all: function() {
    return this.contacts;
  },
  get: function(id) {
    const isContact = p => p.id === id;
    return this.contacts.find(isContact);
  }
};

const DisplayContacts = () => (
  <div><h1>Contact List</h1>
  <p><Link to="/newcontact"><button type="button">New Contact</button></Link></p>
     <table className='table-hover'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Image</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {ContactList.all().map(p => (
            <tr key={p.id}>
                <td><Link to={`/${p.id}`}>{p.name}</Link></td>
                <td><img className='img-thumbnail' alt='contact' width='150' height='150' src={p.image} /></td>
                <td>{p.email}</td>
                <td>{p.phone}</td>
            </tr>
            ))}
      </tbody>
    </table> 
  
  </div>
);


const Home = () => (
  <Switch>
    <Route exact path="/" component={DisplayContacts} />
    <Route path="/:id" component={ContactView} />
  </Switch>
);

const AddNew = () => {
  const generateId = () => Math.round(Math.random() * 100000000);
  const [newContact, setNewContact] = useState({
    id: '',
    name: '',
    email: '',
    phone: '',
    image: ''
  })

  const handleClick = (e) => {
    e.preventDefault();
    newContact.id = generateId();
    ContactList.contacts.push(newContact);
  };

  return (
  <div>
    <form className="addnew-form">
        <h3>Add Contact</h3>
        Name:
        <div className="form-group">
          <input
            className="form-control"
            value={newContact.name}
            onChange={(e) => setNewContact({...newContact, name: e.target.value})}
            /> 

          <br/>
          image
          <input
            className="form-control"
            value={newContact.image}
            onChange={(e) => setNewContact({...newContact, image: e.target.value})}
            />

          <br/>
          email
          <input
            className="form-control"
            value={newContact.email}
            onChange={(e) => setNewContact({...newContact, email: e.target.value})}
            />

          <br/>
          phone
          <input
            className="form-control"
            value={newContact.phone}
            onChange={(e) => setNewContact({...newContact, phone: e.target.value})}
            />
          
        </div>
        
        <button 
        onClick={handleClick} 
        type="button" className="btn btn-primary">Post</button>
      </form>
      <Link to="/">Back</Link>
  </div>
  );
};

const ContactView  = props => {
  const contact = ContactList.get(parseInt(props.match.params.id, 10));
    if (!contact) {
      return <div>No contact information.</div>;
    }
    return (
      <div>
        <h1>
          {contact.name}
        </h1>
        <p><img src={contact.image} className='img-thumbnail' alt='contact' width='150' height='150' /></p>
        <h2>Email: {contact.email}</h2>
        <h2>Phone: {contact.phone}</h2>
        <Link to="/">Back</Link>
      </div>
    );
  
};

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/newcontact" component={AddNew} />
      <Route path="/:id" component={ContactView} />
    </Switch>
  </main>
);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
