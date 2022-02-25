import { Component } from "react/cjs/react.development";
import ContactListItem from "./contact-list-item";
import ConfirmDeleteModal from "./_confirm-delete-modal";
import PropTypes from 'prop-types';

class ContactList extends Component {
    constructor(){
        super();

        this.state = {
            contactToBeDeleted : undefined,
            showModal: false,
            confirmDelete: false
        }
    }
    
    openConfirmDeleteModal = () => {
        this.setState({showModal: true});
    }
    
    setContactToBeDeleted = (contact) => {
        this.setState({contactToBeDeleted: contact}, this.openConfirmDeleteModal);
    }

    confirmDeleteContact = () => {
        this.props.deleteContact(this.state.contactToBeDeleted.id);
        this.setState({
            contactToBeDeleted : undefined,
            showModal: false,
            confirmDelete: false
        })
    }

    render(){
        const contacts = this.props.contacts;
        
        return(
            <div className="row">

                <ConfirmDeleteModal 
                    show={this.state.showModal} 
                    onClose={() => {this.setState({showModal: false})}}
                    contact={this.state.contactToBeDeleted}
                    confirmDeleteContact={this.confirmDeleteContact}
                />
    
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
                                    setContactToBeDeleted={this.setContactToBeDeleted}
                                    key={contact.id.toString()}/>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            )
        }
}

ContactList.propTypes = {
    contacts: PropTypes.array,
    deleteContact: PropTypes.func
}

export default ContactList;

