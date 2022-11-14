import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Button, Row, Col, Card, Form } from 'react-bootstrap';

const EditContact = ({ contactInfo, editContact, history }) => {
  // if (!contactInfo) {
  //   return (
  //     <div>
  //       <h1>Sorry we could not find this contact</h1>
  //       <Link to="/">Back</Link>
  //     </div>
  //   );
  // }
  const [name, setName] = useState(contactInfo.name);
  const [email, setEmail] = useState(contactInfo.email);
  const [phone, setPhone] = useState(contactInfo.phone);
  const [imageUrl, setImageUrl] = useState(contactInfo.imageUrl);

  const handleClick = () => {
    const contactEdits = { name, email, phone, imageUrl, id: contactInfo.id };
    editContact(contactEdits);
    history.push('/');
  };

  return (
    <Container className="main-container">
      <Row>
        <Col xs={12} md={6} className="offset-md-3">
          <Card bg="secondary" className="contact-form-card">
            <Card.Title>Create New Contact</Card.Title>
            <Card.Img
              className="contact-form-pic"
              variant="top"
              src={
                imageUrl ||
                'https://imgs.search.brave.com/2_9LHnzOqX-g1bLpnM1-0z4QWC5rajF6DGy1W-bWjvw/rs:fit:416:416:1/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vdmVjdG9y/cy9kZWZhdWx0LXBy/b2ZpbGUtcGljdHVy/ZS1hdmF0YXItcGhv/dG8tcGxhY2Vob2xk/ZXItdmVjdG9yLWls/bHVzdHJhdGlvbi12/ZWN0b3ItaWQxMjIz/NjcxMzkyP2s9NiZt/PTEyMjM2NzEzOTIm/cz0xNzA2NjdhJnc9/MCZoPXpQM2w3V0pp/bk9GYUdiMmkxRjRn/OElTMnlsdzBGbElh/YTZ4M3RQOXNlYlU9'
              }
            />
            <Card.Body>
              <Form>
                <Form.Group m={3}>
                  <Form.Control
                    m={3}
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    type="text"
                    placeholder="Name"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    type="email"
                    placeholder="Email"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                    type="text"
                    placeholder="Phone"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    value={imageUrl}
                    onChange={(e) => {
                      setImageUrl(e.target.value);
                    }}
                    type="text"
                    placeholder="Image URL"
                  />
                </Form.Group>
                <Button onClick={handleClick} variant="primary" type="submit">
                  Save Changes
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

EditContact.propTypes = {
  contactInfo: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    imageUrl: PropTypes.string,
    id: PropTypes.number,
  }),
  editContact: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

export default EditContact;
