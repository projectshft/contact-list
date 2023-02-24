import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function ContactCreate({onSubmit}) {
    const navigate = useNavigate();
    const [name, setName] = useState([]);
    const [email, setEmail] = useState ([]);
    const [phone, setPhone] = useState ([]);
    const [image, setImage] = useState ([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({name, email, phone, image});
        setName('');
        setEmail('');
        setPhone('');
        setImage('');
        navigate("/contacts");
    }

    return (
        <div className="contact-create" 
            style={{
                display: 'grid',
                alignItems: "center",
                justifyContent: "center",
                height: "50vh",
                marginTop: "50px"
                }}> 
            <h3>Add a Contact</h3>
            <form 
                style={{
                display: 'grid',
                alignItems: "center",
                justifyContent: "center",
                height: "40vh"}} 
                onSubmit={handleSubmit}>

                    <label>Name:</label>
                    <input className="input" value={name} onChange={(e) => setName(e.target.value)} widthrequired />

                    <label>Email:</label>
                    <input className="input" value={email} onChange={(e) => setEmail(e.target.value)} required />

                    <label>Phone Number:</label>
                    <input className="input" type="tel" value={phone} pattern="[0-9]{3}[0-9]{3}[0-9]{4}" onChange={(e) => setPhone(e.target.value)} required />

                    <label>Image:</label>
                    <input className="input" value={image} onChange={(e) => setImage(e.target.value)} required />

                <button className="button">Add</button>
            </form>
        </div>
)}

export default ContactCreate;