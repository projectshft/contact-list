import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const App = () => (
  <div class="col-md-6 offset-md-3 text-center">
    <Header/>
    <Main />
  </div>
);


const New = () => (
  <div>
    <h1>Add New Contact</h1>
    <form>
      <div class="form-group">
        <label for="InputImg">Profile Picture</label>
        <input type="text" class="form-control" id="InputImg" placeholder="Enter Image URL"/>
      </div>
      <div class="form-group">
        <label for="inputName">Enter Name</label>
        <input type="text" class="form-control" id="inputName" placeholder="Name"/>
      </div>
      <div class="form-group">
        <label for="InputEmail">Email address</label>
        <input type="email" class="form-control" id="InputEmail" aria-describedby="addContact" placeholder="Enter email"/>
      </div>
      <div class="form-group">
        <label for="inputPhoneNumber">Enter Phone Number</label>
        <input type="password" class="form-control" id="inputPhoneNumber" placeholder="Phone Number"/>
      </div>
      <button type="submit" class="btn btn-primary submit-contact">Add Contact</button>
    </form>
  </div>
);


const Contacts = () => (
  <div>
    <Link to={`/newcontact`}>Add New Contact</Link>
    <table class="table table-bordered ">
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
              <td><img src={p.profilePic} alt='profile pic' class='rounded img-thumbnail'></img></td>
              <td><Link to={`/${p.id}`}>{p.name}</Link></td>
              <td>{p.email}</td>
              <td>{p.phoneNumer}</td>
            </tr>
          ))} 
        </tbody>
    </table>
  </div>
);


const Contact = props => {
  const contact = ContactAPI.get(parseInt(props.match.params.id, 10));
  if (!contact) {
    return <div>Sorry, but the contact was not found</div>;
  }
  return (
    <div>
      <img src={contact.profilePic} alt="..." class="img-thumbnail"></img>
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
    { id: 1, name: 'Ben Blocker', email: 'dnlbui@protonmail.com', phoneNumer: '8174238623', profilePic: `https://cdn-icons-png.flaticon.com/512/3135/3135715.png` }
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

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Contacts} />
      <Route path="/newcontact" component={New} />
      <Route path="/:id" component={Contact} />
    </Switch>
  </main>
);


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
