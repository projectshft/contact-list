import React from 'react';

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
            <button className="btn btn-primary">Add New Contact</button>
        </div>
    )
};

export default ContactsList;
