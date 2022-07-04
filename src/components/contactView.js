import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const ContactView = (props) => {
    const location = useLocation();
    const state = location.state.contact;

    return (
        <div className="container">
            <div className="row">
                <div>
                    <img src={state.imageUrl} alt="profile pic" className="img-fluid" />
                    <p>{state.name}</p>
                    <p>{state.email}</p>
                    <p>{state.phoneNumber}</p>
                </div>
                <Link to="/">
                    <button className="btn btn-secondary">Back</button>
                </Link>
            </div>
        </div>
    )
};

export default ContactView;
