import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import ContactList from '../components/ContactList.js'


function Contacts({ onDelete, contacts }) {
   
    return (
        <div className="Contacts">
            <h1 style={{display: 'flex', justifyContent:"center"}}>Your Contact List</h1>
            <Link to="/contacts/new">
                <button>Add Contact</button>
            </Link>
            <ContactList onDelete={onDelete} contacts={contacts} />
            <Outlet />
        </div>
    );
}

export default Contacts;