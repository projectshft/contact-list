import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const NewContactForm = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    let navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        let newContact = {
            id: generateId(),
            name,
            email,
            phoneNumber,
            imageUrl,
        };
        props.addContact(newContact);
        navigate("/");
    };

    const generateId = () => Math.round(Math.random() * 10000000);

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h2>New Contact:</h2>
                    <hr/>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group text-start">
                            <label htmlFor="name" className="form-label"><strong>Name:</strong></label>
                            <input id="name" className="form-control" type="text" placeholder="Enter Full Name" onChange={(e) => setName(e.target.value)}/>
                            <label htmlFor="email" className="form-label"><strong>Email:</strong></label>
                            <input id="email" className="form-control" type="email" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)}/>
                            <label htmlFor="phoneNumber" className="form-label"><strong>Phone Number:</strong></label>
                            <input id="phoneNumber" className="form-control" type="" placeholder="Enter Phone" onChange={(e) => setPhoneNumber(e.target.value)}/>
                            <label htmlFor="imageUrl" className="form-label"><strong>Image URL:</strong></label>
                            <input id="imageUrl" className="form-control" type="" placeholder="Image URL" onChange={(e) => setImageUrl(e.target.value)}/>
                        </div>
                        <>
                        <Link to="/">
                            <button className="btn btn-danger">Cancel</button>
                        </Link>
                        <button type="submit" className="btn btn-primary">Submit</button>
                        </>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default NewContactForm;
