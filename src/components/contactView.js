import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const ContactView = (props) => {
    const location = useLocation();
    const state = location.state.contact;

    return (
        <div className="container">
            <div className="row">
                <div
                    style={{
                        border: "solid 1px grey"
                    }}
                >
                    <img style={{ marginBottom: "5px" }} src={state.imageUrl} alt="profile pic" className="img-fluid" />
                    <div className="text-center">
                        <h4>{state.name}</h4>
                        <p>{state.email}</p>
                        <p>{state.phoneNumber}</p>
                    </div>
                </div>
                <Link to="/">
                    <button className="btn btn-secondary">Back</button>
                </Link>
            </div>
        </div>
    )
};

export default ContactView;
