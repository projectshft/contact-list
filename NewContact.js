import { useState } from "react";
import { useNavigate } from "react-router-dom"; 

const NewContact = () => {
    const [profileUrl, setProfileUrl] = useState(''); 
    const [name, setName] = useState(''); 
    const [email, setEmail] = useState(''); 
    const [phoneNumber, setPhoneNumber] = useState('');
    const navigate = useNavigate(); 


    const handleSubmit = (e) => {
        e.preventDefault(); 
        const info = {profileUrl, name, email, phoneNumber}; 


        console.log(info); 
        fetch('http://localhost:9000/contacts', {
            method:'POST', 
            headers: { "Content-Type": "application/json"}, 
            body: JSON.stringify(info)

        }).then(() => {
            console.log('new contact added'); 
            navigate('/'); 
        })
        .catch((error) => {
            console.error('Error adding new contact:', error);
          });


    }

    return (
        <div className="newContact">
            <h2> Create New Contact</h2>
            <form onSubmit={handleSubmit}>
                <label>Profile Photo</label>
                <input
                    type="url"
                    required
                    value={profileUrl}
                    onChange={(e) => setProfileUrl(e.target.value)}
                />
                <label>Name</label>
                <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label>Email</label>
                    <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                />
                <label>Phone Number</label>
                    <input
                        type="text"
                        required
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default NewContact; 

