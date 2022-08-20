import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div>
    <h1>Hypothetical Dinner Party Rolodex</h1>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contacts/new">Add contact</Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default Header;
