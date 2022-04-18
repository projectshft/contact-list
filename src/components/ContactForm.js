import './ContactForm.css';

import useFormInput from "../hooks/useFormInput";

const ContactForm = (props) => {
    const [name, clearName, handleNameChange] = useFormInput(props.edit ? props.contact.name : '');
    const [imageUrl, clearImageUrl, handleImageUrlChange] = useFormInput(props.edit ? props.contact.image_url : '');
    const [email, clearEmail, handleEmailChange] = useFormInput(props.edit ? props.contact.email : '');
    const [phoneNumber, clearPhoneNumber, handlePhoneNumberChange] = useFormInput(props.edit ? props.contact.phone_number : '');

    const goToContacts = () => {
        clearName();
        clearImageUrl();
        clearEmail();
        clearPhoneNumber();
        props.history.push('/');
    }

    const handleSubmit = () => {
        const contact = {
            name: name,
            image_url: imageUrl,
            email: email,
            phone_number: phoneNumber
        };
        if(!props.edit) {
            console.log('adding contact');
            contact.id = Math.round(Math.random() * 100000000);
            props.addContact(contact);
        } else {
            console.log('in else')
            contact.id = props.contact.id;
            props.editContact(contact);
        }
        goToContacts();
    }    

    const handleDelete = () => {
        props.deleteContact(props.contact.id);
        goToContacts();
    }

    return (
        <div className="row justify-content-center">
            <div className="col-6 ">
                <h1>Add a New Contact</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Full Name</label>
                        <input required type="text" className="form-control" id="name" placeholder="Enter Full Name" value={name} onChange={handleNameChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email Address</label>
                        <input required type="email" className="form-control" id="email" placeholder="Enter Email" value={email} onChange={handleEmailChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone-number" className="form-label">Phone Number</label>
                        <input required minlength={9} maxlength={9} type="text" className="form-control" id="phone-number" placeholder="Enter Phone" value={phoneNumber} onChange={handlePhoneNumberChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="image-url" className="form-label">Image URL</label>
                        <input required type="text" className="form-control" id="image-url"  placeholder="Image URL" value={imageUrl} onChange={handleImageUrlChange}/>
                    </div>
                    <button type="submit" className="btn btn-success btn-lg">{!props.edit ? 'Add Contact' : 'Save Changes'}</button>
                    {props.edit ? <button type="button" className="btn btn-danger btn-lg" onClick={handleDelete}>Delete</button> : null}
                </form>
            </div>
        </div>
    )
}

export default ContactForm;