import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const { pathname } = useLocation();
  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col-md-auto">
          <h1 className="header">Contact list</h1>
        </div>
      </div>

      {pathname === '/' ? (
        <Link to="/contacts/new">
          <button type="button" className="btn btn-primary">
            Add new contact
          </button>
        </Link>
      ) : (
        <Link to="/">
          <button type="button" className="btn btn-primary">
            Back to contacts
          </button>
        </Link>
      )}
    </div>
  );
};

export default Header;
