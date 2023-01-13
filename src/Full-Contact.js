import { Link, useRouteMatch } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import { Image } from "react-bootstrap";

const FullContact = ({contacts}) => (
  <div>
    <ul>
      {contacts.map(individual => (

        <Card style={{ width: '18rem' }} bg={'Dark'}>
          <Card.Img as={Image} variant="top" src={`${individual.image}`} fluid={true} alt="Card image" />
          <Card.Body>
            <Card.Title><Link to={`/contacts/${individual.Id}`}>{individual.name}</Link></Card.Title>
          </Card.Body>
        </Card>

      ))}
    </ul>
    <button><Link to={'/contacts/new'}>Add Contact</Link></button>
  </div>
  
)

export default FullContact