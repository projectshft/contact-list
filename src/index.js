import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <div>
    <Main />
  </div>
);

const Contacts = {
  people: [
    {
      id: 70219577,
      name: "Albert Einstein",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Einstein_1921_by_F_Schmutzer_-_restoration.jpg/220px-Einstein_1921_by_F_Schmutzer_-_restoration.jpg",
      email: "aeinstein@example.com",
      phone_number: "15555555555"
    }
  ],
  all: function() {
    return this.people;
  },
  get: function(id) {
    const isPerson = p => p.id === id;
    return this.people.find(isPerson);
  }
};

const Person = props => {
  const person = Contacts.get(parseInt(props.match.params.id, 10));
  if (!person) {
    return <div>Sorry, but the person was not found</div>;
  }
  return (
    <div>
      <div>
        <h1>Contact List</h1>
        <hr></hr>
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col">
            <img src={person.image_url} alt='Profile'></img>
          </div>
          <div className="col align-self-center">
            <span><strong>{person.name}</strong></span>
          </div>
          <div className="col justify-content-center">
            <span>{person.email}</span>
          </div>
          <div className="col justify-content-center">
            <span>{person.phone_number}</span>
          </div>
            <Link className="link" to="/">Back</Link>
        </div>
      </div>
    </div>
  );
};

const FullList = () => (
  <div>
    <h1>Contact List</h1>
    <hr></hr>
    <Link className="link btn btn-primary" to={"/AddContact"}>Add Contact</Link>
    <ul>
      {Contacts.all().map(p => (
        <li key={p.id}>
          <img src={p.image_url} alt='Profile'></img>
          <Link className="link" to={`/${p.id}`}>{p.name}</Link>
        </li>
      ))}
    </ul>
  </div>
);

class AddContact extends React.Component {
  constructor() {
      super();
      this.state = {
          id: null,
          name: '',
          image_url: '',
          email: '',
          phone_number: ''
      };
      this.commonChange = this.commonChange.bind(this);
      this.showValue = this.showValue.bind(this);
  }

  commonChange(event) {
      this.setState({
          [event.target.name]: event.target.value
      });
  }

  showValue(event){
      event.preventDefault();
      this.setState({id : Math.floor(Math.random() * 90000000)}, function() {
        Contacts.people.push(this.state);
      });
      alert('New Contact Added!');
  };

  render() {
    return (
      <div>
        <h1>New Contact</h1>
        <hr></hr>
        <div className="input-group">
          <span className="input-group-text">First and Last Name</span>
          <input name="name" type="text" aria-label="name" placeholder="Full Name"  className="form-control" onChange={this.commonChange}></input>
        </div>

        <input name="email" type="text" className="form-control" placeholder="Email Address" onChange={this.commonChange}></input>


        <input name="phone_number" type="text" className="form-control" placeholder="Phone Number: (ex: 15555555555)" onChange={this.commonChange}></input>


        <input name="image_url" type="text" className="form-control" placeholder="Image Url" onChange={ this.commonChange}></input>

        <button type="button" className="btn btn-primary" onClick={this.showValue}>Add Contact</button>

        <Link className="link" to="/">Back</Link>
      </div>
    );
  };
};

const Main = () => (
  <Switch>
    <Route exact path="/" component={FullList} />
    <Route path="/AddContact" component={AddContact}></Route>
    <Route path="/:id" component={Person} />
  </Switch>
);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);