import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className="container">
    <div className="row justify-content-md-center">
      <div className="col-md-auto">
        <h1 className="header">Contact list</h1>
      </div>
    </div>
    <Link to="/contacts/new">
      <button type="button" className="btn btn-primary">
        Add new contact
      </button>
    </Link>
  </div>
);

export default Header;
