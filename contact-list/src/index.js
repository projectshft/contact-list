import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useHistory,
} from 'react-router-dom';
import './index.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';

const generateId = () => Math.round(Math.random() * 100000000);

const ContactAPI = {
  contacts: [
    {
      id: generateId(),
      fullName: 'Albert Einstein',
      image_url:
        'https://en.wikipedia.org/wiki/Albert_Einstein#/media/File:Einstein_1921_by_F_Schmutzer_-_restoration.jpg',
      email: 'aeinstein@example.com',
      phone_number: '15555555555',
    },
    {
      id: generateId(),
      fullName: 'Elon Musk',
      image_url:
        'https://i.insider.com/6038b0ec05ddb100195f656f?width=700&format=jpeg&auto=webp',
      email: 'emusk@tesla.com',
      phone_number: '15555555555',
    },
  ],
};

const AddContact = ({ addContact }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [imgUrl, setImgUrl] = useState('');

  const history = useHistory();

  const handleAddContactClick = () => {
    addContact({
      id: generateId(),
      fullName,
      email,
      phoneNumber,
      imgUrl,
    });

    history.push('/contacts');
  };

  return (
    <div className="col-md-8 offset-md-2">
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="name"
            placeholder="Enter Full Name"
            onChange={(event) => setFullName(event.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email"
            onChange={(event) => setEmail(event.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="phone"
            placeholder="Enter Phone"
            onChange={(event) => setPhoneNumber(event.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            type="url"
            placeholder="Image URL"
            onChange={(event) => setImgUrl(event.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleAddContactClick}>
          Add Contact
        </Button>
      </Form>
    </div>
  );
};

const ViewContact = () => (
  <div className="col-md-4 offset-md-4">
    <Card style={{ width: '18rem' }}>
      <Card.Img
        variant="top"
        src="https://i.insider.com/6038b0ec05ddb100195f656f?width=700&format=jpeg&auto=webp"
      />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    <Button>
      <Link to="/contacts">Back</Link>
    </Button>
  </div>
);

// const Contact = () => {};

const ContactList = ({ contacts }) => (
  <div className="col-md-8 offset-md-2">
    <Link className="btn btn-primary" to="/new">
      Add Contact
    </Link>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Profile Pic</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone Number</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact) => (
          <tr key={contact.id}>
            <td>{contact.id}</td>
            <td>{contact.fullName}</td>
            <td>{contact.email}</td>
            <td>{contact.phone_number}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  </div>
);

const Main = () => {
  const [contacts, setContacts] = useState(ContactAPI.contacts);

  const addContact = (newContact) =>
    setContacts((previousContacts) => [...previousContacts, newContact]);

  console.log('contacts', contacts);
  return (
    <div>
      <h1>Contact List</h1>
      <main>
        <Switch>
          <Route exact path="/" component={ContactList} />
          <Route
            path="/new"
            render={() => <AddContact addContact={addContact} />}
          />
          <Route
            path="/contacts"
            render={() => <ContactList contacts={contacts} />}
          />
        </Switch>
      </main>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
