import PropTypes from 'prop-types';
import {useState} from "react";
import { useNavigate } from "react-router-dom";

function NewContact({addNewContact}) {
    let navigate = useNavigate();

    const getInitialState = () => {
        return {
            name: "",
            email: "",
            phone_number: "",
            image_url: "",
            id: Math.round(Math.random() * 100000000)
        }
    };

    const [newContact, setNewContact] = useState(getInitialState());

    const handleAddNewContact = () => {
        addNewContact(newContact);
        setNewContact(getInitialState());
        navigate('/contacts');
    } 

    
    
    return(
        <form className="col-6 mx-auto new-contact-form" 
        onSubmit={(e)=>{
            e.preventDefault();
            handleAddNewContact();
            
            }}>

            <div className="form-group">
                <label>Name</label>
                <input 
                value={newContact.name} 
                onChange={(e) => setNewContact({...newContact, name: e.target.value})}
                type="text" className="form-control" placeholder="Enter name" />
            </div>
            <div className="form-group mt-3">
                <label>Email address</label>
                <input 
                value={newContact.email} 
                onChange={(e) => setNewContact({...newContact, email: e.target.value})}
                type="email" className="form-control" placeholder="Enter email" />
            </div>
            <div className="form-group mt-3">
                <label >Phone Number</label>
                <input 
                value={newContact.phone_number}
                onChange={(e) => setNewContact({...newContact, phone_number: e.target.value})}
                type="text" className="form-control" placeholder="Enter phone" />
            </div>
            <div className="form-group mt-3">
                <label >Image Url</label>
                <input 
                value={newContact.image_url}
                onChange={(e) => setNewContact({...newContact, image_url: e.target.value})} 
                type="url" className="form-control" placeholder="Image Url" />
            </div>
        
            <button type="submit" className="btn btn-primary mt-4">Make New Contact</button>
        </form>
    ) 
}

NewContact.propTypes = {
    addNewContact: PropTypes.func
}

export default NewContact;