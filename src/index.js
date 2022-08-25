import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const App = () => (
  <div>
    <Main />
  </div>
);


const New = () => (
  <div>
    <form>
      <div class="form-group">
        <label for="InputImg">Profile Picture</label>
        <input type="image" class="form-control" id="InputImg" aria-describedby="emailHelp" placeholder="Enter img URL"/>
      </div>
      <div class="form-group">
        <label for="inputName">Name</label>
        <input type="text" class="form-control" id="inputName" placeholder="Name"/>
      </div>
      <div class="form-group">
        <label for="InputEmail">Email address</label>
        <input type="email" class="form-control" id="InputEmail" aria-describedby="emailHelp" placeholder="Enter email"/>
      </div>
      <div class="form-group">
        <label for="inputPhoneNumber">Phone Number</label>
        <input type="password" class="form-control" id="inputPhoneNumber" placeholder="Phone Number"/>
      </div>
      <button type="submit" class="btn btn-primary">Add Contact</button>
    </form>
  </div>
);


const Contacts = () => (
  <table class="table table-bordered">
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
            <td>{p.profilePic}</td>
            <td><Link to={`/${p.id}`}>{p.name}</Link></td>
            <td>{p.email}</td>
            <td>{p.phoneNumer}</td>
          </tr>
        ))} 
      </tbody>
  </table>
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
    { id: 1, name: 'Ben Blocker', email: 'dnlbui@protonmail.com', phoneNumer: '8174238623', profilePic: `https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.pinimg.com%2F736x%2F25%2F78%2F61%2F25786134576ce0344893b33a051160b1.jpg&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Fpin%2Fcool-profile-picture--1017461740786087404%2F&tbnid=08VDftRIkEnVuM&vet=12ahUKEwiI5vfj8uD5AhUkgokEHW1GBocQMygFegUIARDoAQ..i&docid=n4-9K2e47rmqpM&w=736&h=852&q=profile%20pic&ved=2ahUKEwiI5vfj8uD5AhUkgokEHW1GBocQMygFegUIARDoAQ` }
  ],
  all: function() {
    return this.contacts;
  },
  get: function(id) {
    const isContact = p => p.id === id;
    return this.contacts.find(isContact);
  }
};


const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Contacts} />
      <Route path="/:id" component={Contact} />
      <Route path="/new" component={New} />
    </Switch>
  </main>
);


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
