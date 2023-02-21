const ContactList = ({contacts, title, handleDelete}) => {

  
  // const contacts =props.contacts
  return ( 
    <div className="contact-list">
      <h2 className="title">{title}</h2>
      {contacts.map((cont) => (
        <div className="preview" key={cont.id}>
        <img className="userphoto" src="{p.image}" />
        <p>{cont.name}</p>
        <p>{cont.phone}</p>
        <p>{cont.email}</p>
        <button onClick={() => handleDelete(cont.id)}>Delete</button>

        </div>
      ))}
    </div>
   );
}
 
export default ContactList;