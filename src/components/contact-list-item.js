import { useNavigate } from "react-router-dom";

const ContactListItem = ({contact, setContactToBeDeleted, toggleShowConfirmDeleteModal}) => {
   let navigate = useNavigate();
    
    const viewContactDetail = (id) => {
        navigate(`/contacts/${id}`);
    }
    
    const handleEditContact = (id) => {
        navigate(`/contacts/${id}/edit`);   
    }
    

    return( 
        <tr className="contact" onClick={() => {viewContactDetail(contact.id)}}> 
            <td>
                <img src={contact.image_url} alt="..." className="img-thumbnail mr-2" width="25%"/>
            </td>
            <td>{contact.name}</td>
            <td>{contact.email}</td>
            <td>{contact.phone_number}</td>
            <td>
                <button type="button" className="btn btn-warning edit-btn" onClick={(e) => {
                    e.stopPropagation();
                    handleEditContact(contact.id);
                }}>
                    Edit
                </button>
                <button type="button" className="btn btn-danger del-btn mt-1" onClick={(e) => {
                    e.stopPropagation();
                    setContactToBeDeleted(contact);  
                }}>
                    Delete
                </button>
            </td>
        </tr>
    )
}

export default ContactListItem;