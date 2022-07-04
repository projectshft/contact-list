import React from 'react';
import { Link } from 'react-router-dom';

const ContactsList = () => {

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Profile Pic</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone Number</th>
                    </tr>
                </thead>
                <tbody>
                    <tr></tr>
                </tbody>
            </table>
            <Link to="/contacts-list/new">
                <button className="btn btn-primary">Add New Contact</button>
            </Link>
        </div>
    )
};

export default ContactsList;
