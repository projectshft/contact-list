import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import PropTypes from 'prop-types';
import { propTypes } from 'react-bootstrap/esm/Image';

const FullContact = ({contacts}) => (
  <div className='full-contact'>
    <button className='full-contact-button'><Link to={'/contacts/new'}>Add Contact</Link></button>
    <br/>
    <button className='full-contact-button'><Link to={'/'}>Home</Link></button>
    
  <Container>
    <Row>
    
      {contacts.map(individual => (
        
        <Col sm='auto'>
          <Card className='same-card-size' style={{ width: '18rem' }}>
            <Card.Img  className='same-image-size' variant="top" src={`${individual.image}`} alt="Card image" />
            <Card.Body>
              <Card.Title><Link to={`/contacts/${individual.Id}`}>{individual.name}</Link></Card.Title>
            </Card.Body>
          </Card>
        </Col>

      ))}

    </Row>  
  </Container>
  </div>
  
)

FullContact.defaultProps = {
  contacts: PropTypes.shape({
    name: 'John Doe',
    image: 'https://tse1.mm.bing.net/th?id=OIP.7o-Gaf6oMuM3_XvLGQZuMgHaEo&pid=Api&rs=1&c=1&qlt=95&w=181&h=113',
    email: 'johndoe@idk.com',
    phoneNumber: 111223333
  })
}

FullContact.propTypes = {
  contacts: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    email: PropTypes.string,
    phoneNumber: PropTypes.number
  })
};

export default FullContact