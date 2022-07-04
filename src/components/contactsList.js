import React from 'react';
import { Link } from 'react-router-dom';

const ContactsList = (props) => {

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
                    {
                        props.contacts.map(c => {
                            return (
                                <tr key={c.id}>
                                    <td><img className="w-50" src={c.imageUrl} alt="profile pic"/></td>
                                    <td>{c.name}</td>
                                    <td>{c.email}</td>
                                    <td>{c.phoneNumber}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <Link to="/contacts-list/new">
                <button className="btn btn-primary">Add New Contact</button>
            </Link>
        </div>
    )
};

export default ContactsList;
