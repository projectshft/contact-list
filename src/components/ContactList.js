import './ContactList.css';

import { ContactsContext } from '../contacts-context';

const ContactList = (props) => {
    const handleSelectContact = evt => {
        props.history.push(`/contacts/${evt.target.parentNode.dataset.id}`);
    }

    const goToAddContactPage = () => {
        props.history.push('/new');
    }

    return (
        <ContactsContext.Consumer>
            {({contacts}) => {
                return (
                    <div className="Contact_List">
                        <h1>Contact List</h1>
                        <div className="container">
                        <div className="button-container"><button className="btn btn-primary btn-lg" onClick={goToAddContactPage}>Add Contact</button></div>
                            <table className="table table-striped table-hover table-bordered">
                                <thead className='table-bordered'>
                                    <tr>
                                        <th scope="col">Profile Pic</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Phone Number</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {contacts.map(contact => {
                                        return (
                                            <tr onClick={handleSelectContact} data-id={contact.id}>
                                                <td className="image-cell"><img src={contact.image_url} alt={contact.name} /></td>
                                                <td>{contact.name}</td>
                                                <td>{contact.email}</td>
                                                <td>{contact.phone_number}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )
            }}
        </ContactsContext.Consumer>
    )
}

export default ContactList;