import ContactShow from './ContactShow.js';

function ContactList({contacts, onDelete}) {
    const renderedContacts = contacts.map((contact) => {
        return <ContactShow onDelete={onDelete} key={contact.id} contact={contact} />
    });

    return (
        <div id="container" 
            style={{
            display: 'flex',
            alignItems: "center",
            justifyContent: "center",
            height: "50vh"
            }}>
            {renderedContacts}
        </div>
)}

export default ContactList;