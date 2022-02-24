import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {useState} from "react";

export default function EditContact({getContact, editContact}) {
    let params = useParams();
    let retrievedContact = getContact(parseInt(params.contactId));
    const [contact, setContact] = useState({...retrievedContact});
    const navigate = useNavigate();

    const handleEditContact = (contact) => {
        editContact(contact);
        navigate('/contacts');
    }

    return (
        <form className="col-6 mx-auto new-contact-form" 
        onSubmit={(e)=>{
            e.preventDefault();
            handleEditContact(contact);
            }}>

            <div className="form-group">
                <label>Name</label>
                <input 
                value={contact.name} 
                onChange={(e) => setContact({...contact, name: e.target.value})}
                type="text" className="form-control" placeholder="Enter name" />
            </div>
            <div className="form-group mt-3">
                <label>Email address</label>
                <input 
                value={contact.email} 
                onChange={(e) => setContact({...contact, email: e.target.value})}
                type="email" className="form-control" placeholder="Enter email" />
            </div>
            <div className="form-group mt-3">
                <label >Phone Number</label>
                <input 
                value={contact.phone_number}
                onChange={(e) => setContact({...contact, phone_number: e.target.value})}
                type="text" className="form-control" placeholder="Enter phone" />
            </div>
            <div className="form-group mt-3">
                <label >Image Url</label>
                <input 
                value={contact.image_url}
                onChange={(e) => setContact({...contact, image_url: e.target.value})} 
                type="url" className="form-control" placeholder="Image Url" />
            </div>
        
            <button type="submit" className="btn btn-success mt-4">Save Edit</button>
        </form>
    );
  }