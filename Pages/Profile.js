import React from 'react';
import { Link, useParams } from 'react-router-dom';


function Profile({ contacts }) {
    const {id} = useParams();

    const indContact = contacts.filter((contact) => {
        return contact.id === id;
    });

    return (
        <div>
            <Link to="/contacts">Go Back</Link>
            <div style={{
                display: 'grid',
                alignItems: "center",
                justifyContent: "center",
                height: "50vh",
                marginTop: "50px"
                }}> 
                <img
                    className="contact-image"
                    alt="contact-picture"
                    src={indContact[0].image} />
                <h3 style={{ textTransform: "capitalize" }}>Name: {indContact[0].name}</h3>
                <h4>Email: {indContact[0].email}</h4>
                <h4>Phone: {indContact[0].phone}</h4>
            </div>
        </div>
)}

export default Profile;