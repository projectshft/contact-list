import React from "react";
import { useNavigate } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import data from './data.json'

const Main= () => {
  const navigate= useNavigate()
  const createNew= () => {
    navigate('/contact/new')  
  }
  const handleClick = (contact) => {
    navigate(`/contact/${contact.id}`);
  }
  return (
    <div className="App">
      <h1>Contacts</h1>
    <Button onClick={createNew} variant="primary">Create Contact</Button>

    <Table striped bordered hover>
      
      <thead>
        <tr>
          <th>Profile Pic</th>
          <th>Name</th>
          <th>email</th>
          <th>Phone number</th>
        </tr>
      </thead>
      <tbody>
        {data.contacts.map((contact,index) => (
          <tr key={index} onClick={() => handleClick(contact)}>
          <td>
            <Image src={contact.image_url} alt={contact.name} width={100} height={100} />
          </td>
          <td>{contact.name}</td>
          <td>{contact.email}</td>
          <td>{contact.phone_number}</td>
        </tr>
        ))}
      </tbody>
    </Table>
  </div>
  )
}

export default Main
