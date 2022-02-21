import PropTypes from 'prop-types';
import { Row, Col, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useParams } from 'react-router-dom';

const ContactView = ({ getContact }) => {
  const { contactId } = useParams();
  const contact = getContact(parseInt(contactId, 10));

  if (!contact) {
    return (
      <div>
        <h1 className="text-center pt-3">No contact found</h1>
        <div className="d-flex justify-content-center pt-3">
          <LinkContainer to="/">
            <Button variant="outline-dark">Back</Button>
          </LinkContainer>
        </div>
      </div>
    );
  }

  const { name, email, phone, photoUrl, id } = contact;
  return (
    <Row>
      <Col md={{ span: 3, offset: 3 }}>
        <img src={photoUrl} alt="" className="img-fluid" />
      </Col>
      <Col>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
        <p>Site ID: {id}</p>
        <div>
          <LinkContainer to="/">
            <Button variant="outline-dark">Back</Button>
          </LinkContainer>
        </div>
      </Col>
    </Row>
  );
};

ContactView.propTypes = {
  getContact: PropTypes.func.isRequired,
};

export default ContactView;
