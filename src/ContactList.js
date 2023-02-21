import { Link } from "react-router-dom";

const ContactList = ({contacts, title}) => {

  return ( 
    <div className="contact-list">
      <h2 className="title">{title}</h2>
      {contacts.map((cont) => (
        <div className="preview" key={cont.id}>
        <img
        src={cont.image} 
        alt=""
        className="userphoto" />
        <p>{cont.name}</p>
        <p>{cont.phone}</p>
        <Link to={`/contact/${cont.id}`}>
        <p>{cont.email}</p>
        </Link>
        </div>
      ))}
    </div>
   );
}
 
export default ContactList;