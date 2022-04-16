import useFormInput from "../hooks/useFormInput";

const ContactForm = (props) => {
    const [name, clearName, handleNameChange] = useFormInput(props.edit ? props.contact.name : null);
    const [imageUrl, clearImageUrl, handleImageUrlChange] = useFormInput(props.edit ? props.contact.imageUrl : null);
    const [email, clearEmail, handleEmailChange] = useFormInput(props.edit ? props.contact.email : null);
    const [phoneNumber, clearPhoneNumber, handlePhoneNumberChange] = useFormInput(props.edit ? props.contact.phoneNumber : null);

    return (
        <form>
            <label htmlFor="name">Name:</label>
            <input name="name" id="name" type="text" onChange={handleNameChange} value={name}/>
        </form>
    )
}

export default ContactForm;