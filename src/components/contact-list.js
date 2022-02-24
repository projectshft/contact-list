import React, {useState, useEffect} from "react";
import ContactListItem from "./contact-list-item";
import ConfirmDeleteModal from "./_confirm-delete-modal";

const ContactList = ({contacts, deleteContact}) => {
    const [contactToBeDeleted, setContactToBeDeleted] = useState(undefined);
    const [showModal, setShowModal] = useState(false);
    const [confirmDelete, setConfirmDelete] = useState(false);

    useEffect(() => {
        if(contactToBeDeleted){
            setShowModal(true);
        }
    });

    





    return(
        <div className="row">
             <ConfirmDeleteModal show={showModal} onClose={() => {setShowModal(false)}}/>
            <div className="table-responsive">
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>Profile Pic</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contacts.map(contact => {
                            return (
                                <ContactListItem 
                                contact={contact}
                                setContactToBeDeleted={setContactToBeDeleted}
                                key={contact.id.toString()}/>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ContactList;

