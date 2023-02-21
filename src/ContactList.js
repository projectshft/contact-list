const ContactList = ({contacts, title}) => {

  
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
        </div>
      ))}
    </div>
   );
}
 
export default ContactList;