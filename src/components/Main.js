import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container, Table } from 'react-bootstrap';
import NewContact from './NewContact';
import UniqueContact from './UniqueContact';
import './Main.css';

const ContactAPI = {
  contacts: [
    { 
      id: 1, 
      name: 'Barack Obama', 
      image_url: "https://cdn.britannica.com/89/164789-050-D6B5E2C7/Barack-Obama-2012.jpg",
      email: "bobama@obamas.com",
      phone: "(555)-555-5555",
    },
    { 
      id: 2, 
      name: 'Michelle Obama', 
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Michelle_Obama_2013_official_portrait.jpg/220px-Michelle_Obama_2013_official_portrait.jpg",
      email: "mobama@obamas.com",
      phone: "(555)-555-6666",
    },
    { 
      id: 3, 
      name: 'Bernie Sanders', 
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Bernie_Sanders_in_March_2020.jpg/220px-Bernie_Sanders_in_March_2020.jpg",
      email: "bsanders@bernie.com",
      phone: "(555)-555-7777",
    },
  ],
  all: function() {
    return this.contacts;
  },
  get: function(id) {
    const isContact = p => p.id === id;
    return this.contacts.find(isContact);
  }
};

const Contacts = () => (
  <div>
    <h1>Contact List</h1>

    <Container>
      <a role="button" href="/contacts/new" className="btn btn-primary btn-sm">+ New Contact</a>
      
      <Table bordered hover size="sm">
        <thead>
          <tr>
            <th>Photo</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
      {ContactAPI.all().map(c => (
        <tbody>
          <tr id={c.id}>
            <td><img src={c.image_url} className="img-responsive center-block d-block mx-auto" /></td>
            <td>{c.name}</td>
            <td>{c.email}</td>
            <td>{c.phone}</td>
          </tr>
        </tbody>
      ))}
      </Table>
      
    </Container>
  
  </div>
);

export default function Main() {
  return (
    <main>
      <Routes>
        <Route path="/*" element={<Contacts />} />
        <Route path="/contacts/new" element={<NewContact />} />
        <Route path="/contacts/:id" element={<UniqueContact />} />
      </Routes>
    </main>
  );
};


