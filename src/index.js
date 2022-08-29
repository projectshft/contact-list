import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import data from './ContactInfo.json'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

var contacts = data.contacts;

const App = () => (
  <div>
    <Main />
  </div>
);

const ContactList = () => (
 <div className="row">
    <div className="col-md-6 offset-md-3">
      <div className="page-header">
        <h1>Contact List</h1>
      </div>
      <Link to="/addcontact">
      <button type="button" className="btn btn-primary add-new-contact">Add New Contact</button>
      </Link>
      <div className="posts">
      </div>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th scope="col">Profile Pic</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
            </tr>
          </thead>
          {RenderContacts()}
        </table>
    </div>
    
  </div>
);

const RenderContacts = () => (
  <tbody>
    {contacts.map((contact, index) => {
      return (
    <tr key={index} className="contacts-template">
      <td><img style={{height: '200px', width: '300px'}} src={contact.image_url} alt='portrait'/></td> 
    <td>{contact.name}</td>
     <td>{contact.email}</td>
     <td>{contact.phone_number}</td>
   </tr>
      )
  })
    }
    </tbody>

 );

 const AddContact = () => (
  <div className="row">
    <div className="col-lg-9 offset-md-3">
  <form>
    <div className="form-header">
      <h1>Add New Contact</h1>
    </div>
    <div className="form-group">
      <label id="exampleInputName1">Full Name</label>
      <br></br>
      <input type="text" className="form-group" id="exampleInputName1" placeholder='Enter Full Name'></input>
    </div>
    <br></br>
    <div className="form-group">
      <label id="exampleInputEmail1">Email Address</label>
      <br></br>
      <input type="email" className="form-group" id="exampleInputEmail1" placeholder='Enter Email'></input>
    </div>
    <br></br>
    <div className="form-group">
      <label id="exampleInputPhone1">Phone Number</label>
      <br></br>
      <input type="text" className="form-group" id="exampleInputPhone1" placeholder='Enter Phone Number'></input>
    </div>
    <br></br>
    <div className="form-group">
      <label id="exampleInputImageURL1">Image Url</label>
      <br></br>
      <input type="text" className="form-group" id="exampleInputImageURL1" placeholder='Enter Image Url'></input>
    </div>
      <br></br>
    <button type="button" className="btn btn-primary create-new-contact" margin-top="20px">Create New Contact</button>
  </form>
  </div>
  </div>
 )
 
 

const Main = () => (
  <main>
    <Switch>
      <Route exact path ="/" component={ContactList}/>
      {/* <Route path="/contact" component = {ContactInfo} />  */}
      <Route path="/addcontact" component={AddContact}/>
    </Switch>
  </main>
)

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


