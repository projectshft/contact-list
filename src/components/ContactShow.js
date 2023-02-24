import { Link } from 'react-router-dom';
import './contact.css';

function ContactShow({ contact, onDelete }) {
    const handleDelete = () => {
        return onDelete(contact.id);
    }

    return (
        <div style={{
            marginRight: "20px",
            marginLeft: "20px",
        }}>
            <Link to={`/contacts/${contact.id}`}>
            <img
                className="contact-image"
                alt="contact-picture"
                src={contact.image} />
            </Link>
            <div style={{ textTransform: "capitalize" }}>{contact.name}</div>
            <div>{contact.email}</div>
            <div>{contact.phone}</div>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default ContactShow;