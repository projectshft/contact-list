import { ContactsContext } from '../contacts-context';

const ContactList = () => {
    return (
        <ContactsContext.Consumer>
            {({contacts}) => {
                return (
                    <div>
                        <h1>Contact List</h1>
                        <ul>
                            {contacts.map(contact => {
                                return <li>{contact.name}</li>
                            })}
                        </ul>
                    </div>
                )
            }}
        </ContactsContext.Consumer>
    )
}

export default ContactList;