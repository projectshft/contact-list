import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const FullContact = ({contacts}) => (
  <div className='full-contact'>
    <button className='full-contact-button'><Link to={'/contacts/new'}>Add Contact</Link></button>
    <br/>
    <button className='full-contact-button'><Link to={'/contacts'}>Home</Link></button>
    
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

export default FullContact