import { Link } from "react-router-dom";
import { Row, Col } from 'react-bootstrap';
import gif from './welcome.gif'

const Home = (props) => {
  return (
    <>
      <h2>Welcome!</h2>
      <img src={gif} className="welcome_gif" alt="A waiving hand and smile" />
      <h5>Choose an Option Below:</h5>
      <div style={{display: 'flex', justifyContent: 'start'}}>
        <Link to="contacts">
          <button className="btn btn-dark">View Contacts</button>
        </Link>
        <Link to="contacts/new">
          <button className="btn btn-dark mx-1">Create New Contact</button>
        </Link>
      </div>
    </>
  );
};

export default Home;