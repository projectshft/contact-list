const ContactForm = (props) => {
    return (
        <div>{props.match.params.id ? 'edit contact form' : 'new contact form'}</div>
    )
}

export default ContactForm;