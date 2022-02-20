import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-heading">
      <h1 className="heading-h1">everyone i know</h1>;
      <div className="text-center">
        <Link className="btn btn-lg btn-light" to={`/contacts/`}>
          Go to Contacts
        </Link>
      </div>
    </div>
  );
}

export default Home;
