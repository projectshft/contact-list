import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div>Home</div>
      {/* <Button>Button</Button> */}
      <Button><Link to={'/new-contact'}>Add Contact</Link></Button>
    </div>
  );
};

export default Home;
