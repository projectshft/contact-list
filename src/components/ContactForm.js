import './ContactForm.css';

import useFormInput from "../hooks/useFormInput";

const ContactForm = (props) => {
    const [name, clearName, handleNameChange] = useFormInput(props.edit ? props.contact.name : null);
    const [imageUrl, clearImageUrl, handleImageUrlChange] = useFormInput(props.edit ? props.contact.imageUrl : null);
    const [email, clearEmail, handleEmailChange] = useFormInput(props.edit ? props.contact.email : null);
    const [phoneNumber, clearPhoneNumber, handlePhoneNumberChange] = useFormInput(props.edit ? props.contact.phoneNumber : null);

    const handleSubmit = () => {
        const newContact = {
            id: Math.round(Math.random() * 100000000),
            name: name,
            image_url: imageUrl,
            email: email,
            phone_number: phoneNumber
        };
        props.addContact(newContact);
        clearName();
        clearImageUrl();
        clearEmail();
        clearPhoneNumber();
        props.history.push('/');
    }

    return (
        <div className="row justify-content-center">
            <div className="col-6 ">
                <h1>Add a New Contact</h1>
                <form onSubmit={handleSubmit}>
                    <div class="mb-3">
                        <label for="name" class="form-label">Full Name</label>
                        <input required type="text" class="form-control" id="name" placeholder="Enter Full Name" value={name} onChange={handleNameChange}/>
                    </div>
                    <div className="mb-3">
                        <label for="email" className="form-label">Email Address</label>
                        <input required type="email" className="form-control" id="email" placeholder="Enter Email" value={email} onChange={handleEmailChange}/>
                    </div>
                    <div className="mb-3">
                        <label for="phone-number" className="form-label">Phone Number</label>
                        <input required type="text" className="form-control" id="phone-number" placeholder="Enter Phone" value={phoneNumber} onChange={handlePhoneNumberChange}/>
                    </div>
                    <div className="mb-3">
                        <label for="image-url" className="form-label">Image URL</label>
                        <input required type="text" className="form-control" id="image-url"  placeholder="Image URL" value={imageUrl} onChange={handleImageUrlChange}/>
                    </div>

                    <button type="submit" className="btn btn-primary btn-lg">Add Contact</button>
                </form>
            </div>
        </div>
    )
}

export default ContactForm;