import { ContactsContext } from "../contacts-context";

const Contact = (props) => {
    return (
        <ContactsContext.Consumer>
            {({findContact}) => {
                let contact = findContact(props.match.params.id);
                console.log(contact);
                return (
                    <p>{contact.name}</p>
                )
            }}
            
        </ContactsContext.Consumer>
    )
}

export default Contact;