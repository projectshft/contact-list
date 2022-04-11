import { BrowserRouter, Switch, Route, Link, useHistory } from 'react-router-dom';
import ReactDOM from 'react-dom';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button, Image, Container, Row, Col, Form } from 'react-bootstrap';
import './index.css';


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
      image: 'https://static2.srcdn.com/wordpress/wp-content/uploads/2022/02/Brie-Larson-as-Captain-Marvel-in-the-MCU.jpg'
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
  <Container>
    <Row>
      <div><h1>Contact List</h1>
      <p><Link to="/newcontact"><Button type="button" variant="info">New Contact</Button></Link></p></div>
    </Row>
    <Row>
    <Col></Col>
    <Col lg={8}>
      <div>
        <Table striped hover size="sm">
          <thead className='thead-light'>
            <tr>
              <th>Name</th>
              <th>Profile Pic</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {ContactList.all().map(p => (
                <tr key={p.id}>
                    <td><h3><Link to={`/${p.id}`}>{p.name}</Link></h3></td>
                    <td><Image className="img-thumbnail" alt='contact' rounded fluid thumbnail src={p.image} /></td>
                    <td>{p.email}</td>
                    <td>{p.phone}</td>
                </tr>
                ))}
          </tbody>
        </Table> 
      </div>
    </Col>
    <Col></Col>
    </Row>
  
  </Container>
);


const Home = () => (
  <Switch>
    <Route exact path="/" component={DisplayContacts} />
    <Route path="/:id" component={ContactView} />
  </Switch>
);


const AddNew = () => {
  const [newContact, setNewContact] = useState({
    id: Math.round(Math.random() * 100000000),
    name: '',
    email: '',
    phone: '',
    image: ''
  })

  const history = useHistory();

  const routeChange = () =>{ 
    let path = '/'; 
    history.push(path);
  }

  const handleClick = (e) => {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var imgExtension = newContact.image.substring(newContact.image.lastIndexOf('.') + 1).toLowerCase();

    e.preventDefault();
      if(!newContact.name || !newContact.image || !newContact.email || !newContact.phone) {
        return alert('All fields required')
      } 
      if (imgExtension == "gif" || imgExtension == "png" || imgExtension == "bmp" || imgExtension == "jpeg" || imgExtension == "jpg") {
      } else {
        console.log(imgExtension)
        return alert('Image Type not recognized')
        }
      if (newContact.email.match(validRegex)) {
      } else {
        return alert('Please provide valid email')
      }
      if (newContact.phone.toString().length != 10) {
        return alert('Phone Number must have 10 digits')
      }

    ContactList.contacts.push(newContact);
    routeChange();
  };

  return (
    <Container>
        <Row>
          <Col></Col>
          <Col md>
          <div>
            <Form className="addnew-form">
                <h3>Add Contact</h3>
                <strong>Name</strong>
                <div className="form-group">
                  <input
                    className="form-control"
                    value={newContact.name}
                    onChange={(e) => setNewContact({...newContact, name: e.target.value})}
                    required
                    /> 

                  <br/>
                  <strong>Profile Pic</strong>
                  <input
                    className="form-control"
                    value={newContact.image}
                    onChange={(e) => setNewContact({...newContact, image: e.target.value})}
                    required
                    />

                  <br/>
                  <strong>Email</strong>
                  <input
                    className="form-control"
                    type="email"
                    pattern=".+@globex\.com"
                    value={newContact.email}
                    onChange={(e) => setNewContact({...newContact, email: e.target.value})}
                    required
                    />

                  <br/>
                  <strong>Phone</strong>
                  <input
                    className="form-control"
                    type="tel"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    value={newContact.phone}
                    onChange={(e) => {
                      setNewContact({...newContact, phone: e.target.value})}}
                      required
                    />
                  
                </div>
                
                <button 
                onClick={handleClick} 
                type="button" className="btn btn-primary">Add Contact</button>
              </Form>
              <Link to="/">Back</Link>
          </div>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  
  );
};

const ContactView  = props => {
  const contact = ContactList.get(parseInt(props.match.params.id, 10));
    if (!contact) {
      return <div>No contact information.</div>;
    }
    return (
      <Container>
        <Row>
          <Col></Col>
          <Col md>
            <div>
              <h1>
                {contact.name}
              </h1>
              <p><Image src={contact.image} className='img-thumbnail rounded fluid' alt='contact' /></p>
              <h2>Email: {contact.email}</h2>
              <h2>Phone: {contact.phone}</h2>
              <Link to="/">Back</Link>
            </div>
          </Col>
          <Col></Col>
        </Row>
      </Container>
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
