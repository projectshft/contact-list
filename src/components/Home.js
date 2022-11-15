import React from 'react';
import PropTypes from 'prop-types';
import { Button, Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = ({ contacts, setCurrentContact, history }) => {
  
  const handleContactClick = (id) => {
    const clickedContact = contacts.find((contact) => contact.id === id);

    setCurrentContact(clickedContact);

    history.push(`/${clickedContact.id}`);
  };

  return (
    <Container className="main-container">
      <Table striped bordered hover>
        <thead>
          <tr>
            <td>Picture</td>
            <td>Name</td>
            <td>Email</td>
            <td>Phone</td>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr onClick={() => handleContactClick(contact.id)} key={contact.id}>
              <td>
                <img
                  src={contact.imageUrl}
                  alt={`${contact.name}`}
                  className="table-image"
                />
              </td>
              <td>
                <div className="contact-info">{contact.name}</div>
              </td>
              <td>
                <div className="contact-info">{contact.email}</div>
              </td>
              <td>
                <div className="contact-info">{contact.phone}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button>
        <Link to="/new-contact">Add Contact</Link>
      </Button>
    </Container>
  );
};

Home.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      email: PropTypes.string,
      phone: PropTypes.string,
      imageUrl: PropTypes.string,
      id: PropTypes.number,
    })
  ).isRequired,
  setCurrentContact: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

export default Home;
