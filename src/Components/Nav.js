import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
    <nav>
        <Link to='/contacts'>Contacts List</Link>
        <Link to='/contacts/new'>Add Contact</Link>
    </nav>
)

export default Nav;
