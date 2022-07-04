import { React, useState } from "react";

const NewContactForm = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const nameValue = (e) => {
        setName({
            name: e.target.value
        });
    };
    const emailValue = (e) => {
        setEmail({
            email: e.target.value
        });
    };
    const phoneNumberValue = (e) => {
        setPhoneNumber({
            phoneNumber: e.target.value
        });
    };
    const imageUrlValue = (e) => {
        setImageUrl({
            imageUrl: e.target.value
        });
    };

    const handleButton = (e) => {
        e.preventDefault();
        let newContact = {
            id: generateId(),
            name,
            email,
            phoneNumber,
            imageUrl,
        };
        console.log(newContact);
        props.addContact(newContact);
    }

    const generateId = () => Math.round(Math.random() * 10000000);

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h2>New Contact:</h2>
                    <hr/>
                    <form className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name" className="form-label">Name:</label>
                            <input id="name" className="form-control" type="text" placeholder="Enter Full Name" onChange={nameValue}/>
                            <label htmlFor="email" className="form-label">Email:</label>
                            <input id="email" className="form-control" type="email" placeholder="Enter Email" onChange={emailValue}/>
                            <label htmlFor="phoneNumber" className="form-label">Phone Number:</label>
                            <input id="phoneNumber" className="form-control" type="" placeholder="Enter Phone" onChange={phoneNumberValue}/>
                            <label htmlFor="imageUrl" className="form-label">Image URL:</label>
                            <input id="imageUrl" className="form-control" type="" placeholder="Image URL" onChange={imageUrlValue}/>
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={handleButton}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default NewContactForm;
