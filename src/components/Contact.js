import { ContactsContext } from "../contacts-context";
import { Redirect } from 'react-router-dom';

const Contact = (props) => {
    return (
        <ContactsContext.Consumer>
            {({findContact}) => {
                let contact = findContact(props.match.params.id);
                
                if(contact) {
                    return (
                        <p>{contact.name}</p>
                    )
                } else {
                    return <Redirect to="/"/>
                }                
            }}
            
        </ContactsContext.Consumer>
    )
}

export default Contact;