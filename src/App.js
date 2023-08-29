
import { Route, Routes, Link, useParams } from 'react-router-dom'
import PropTypes from 'prop-types'
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



const ContactsAPI = {
  "contacts":[
    {
      "id": 12345678,
      "name": "Max Blanton", 
      "phone-number": 1234567890,
      "email": "max.blantonn@gmail.com",
      "image": "https://yt3.ggpht.com/vCrZhd5X3PDYaEVQK2c-sY4YCLR2ypfIMYI8fbfrpVfn5r9yKs7PUICwigkGBkt5nZJNMEJPEC0=s600-c-k-c0x00ffffff-no-rj-rp-mo"
    }
  ],
  "all": function() {
    return this.contacts;
  },

  "get": function(id) {
    const isContact = c => c.id === id;
    return this.contacts.find(isContact);
  }
};

const App = () => (
  <div>
    <Main />
  </div>
);
const Home = () => (
  <div class="App">
    <h1 className="header">Home</h1>
    <hr/>
    <Link to="/contacts" className="btn btn-primary">Contacts</Link>
  </div>
);

const Contacts = () => (
 <div className="App">
  <h2 className="header">Contact Page</h2>
  <hr/>
  <ul className="container">
  {ContactsAPI.all().map(current => (
    
      <li key={current.id} className="row" >
      
        <img className="col-md-2 item-image" alt="" src={current.image}/>
        <h4 className="col-md-2 item">{current.name}</h4>
        <h4 className="col-md-2 item">{current["phone-number"]}</h4>
        <h4 className="col-md-3 item">{current.email}</h4>
        <Link className="col-md-2 btn btn-warning item" to={"/contacts/" + current.id}>View</Link>
      </li>
  ))}
  </ul>
  <Link to="/contacts/new" className="btn btn-primary">Create New</Link>
  </div>
  
);





const ContactCreate = ({ id, name, number, email, image }) => (
    <div className="App">
      <h2 className="header">Create New Contact</h2>
      <hr/>
      <div className="inputs">
        <input name="name" onChange={e => name = e.target.value} type="text" placeholder="Contact Name"/>
        <input name="number" onChange={e => number = e.target.value} type="number" placeholder="Phone Number"/>
        <input name="email" onChange={e => email = e.target.value} type="email" placeholder="Email"/>
        <input name="image" onChange={e => image = e.target.value} alt="" type="url" placeholder="Image URL"/>
      </div>
      <Link to="/contacts" onClick={() => handleClick({ id, name, number, email, image })} className="btn btn-primary">+ Create New</Link>
      <Link to="/contacts" className="btn btn-danger">Back</Link>
    </div>
  );
ContactCreate.propTypes = {
    "id": PropTypes.number,
    "name": PropTypes.string.isRequired,
    "number": PropTypes.number.isRequired,
    "email": PropTypes.string.isRequired,
    "image": PropTypes.string.isRequired
};
ContactCreate.defaultProps = {
  "id": undefined,
  "name": 'N/A',
  "number": 1234567890,
  "email": 'N/A',
  "image": 'https://cdn-icons-png.flaticon.com/512/1144/1144760.png'
};
const handleClick = (props) => {
  const generateId = () => Math.round(Math.random() * 100000000)
  props.id = generateId()
  const contactLength = ContactsAPI.contacts.length
  ContactsAPI.contacts[contactLength] = {
    "id": props.id,
    "name": props.name,
    "phone-number": props.number,
    "email": props.email,
    "image": props.image
  };
};

const Contact = () => {
  const id = useParams();
  const contact = ContactsAPI.get(parseInt(id.number));
  if (!contact) {
    alert("Invalid Number")
  }
  else {
    return (
      <div className="App">
      <h2 className="header">{contact.name}</h2>
      <hr/>
      <div>
          <img className="item-image-contact" alt="" src={contact.image}/>
          <h4 className="item-contact text-center">Phone Number: {contact["phone-number"]}</h4>
          <h4 className="item-contact text-center">Email: {contact.email}</h4>
      </div>
      <Link to="/contacts" className="btn btn-danger">Back</Link>
      </div>
  
  );
  };
};



const Main = () => (
  <main>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="/contacts" element={<Contacts/>}/>
      <Route path={"/contacts/new"} element={<ContactCreate/>}/>
      <Route path={"/contacts/:number"} element={<Contact/>}/>
    </Routes>
  </main>
);

export default App;