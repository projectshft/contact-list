import './Contact.css';

import { ContactsContext } from "../contacts-context";
import { Redirect } from 'react-router-dom';

const Contact = (props) => {
    const goToContactList = () => {
        props.history.push('/');
    }

    const handleGoToEditForm = () => {
        props.history.push(`/contacts/${props.match.params.id}/edit`);
    }

    return (
        <ContactsContext.Consumer>
            {({findContact}) => {
                let contact = findContact(props.match.params.id);
                
                if(contact) {
                    return (
                        <div className="container">
                            <h1 onClick={goToContactList}>Contact List</h1>
                            <div className="card">
                                <img src={contact.image_url} class="card-img-top" alt={contact.name} />
                                <div className="card-body">
                                    <h5 className="card-title">{contact.name}</h5>
                                    <p className="card-text">{contact.email}</p>
                                    <p className="card-text">{contact.phone_number}</p>
                                </div>
                            </div>
                            <button className="btn btn-warning btn-lg" onClick={handleGoToEditForm}>Edit</button>
                        </div>
                    )
                } else {
                    return <Redirect to="/"/>
                }                
            }}
            
        </ContactsContext.Consumer>
    )
}

export default Contact;