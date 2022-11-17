
const ContactList = (contacts) => {
    <div>
        <h1>this is the list</h1>
        <ul>
         {contacts.map(item => (
            <span>{item.name}</span>
         ))}
        </ul>
    </div>
}

export default ContactList