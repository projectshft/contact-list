import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Contacts from './Contacts'
import ContactNew from './ContactNew'
import Contact from './Contact'

const test1 = {
    "id": "q101",
    "name": "Nathan Pak",
    "image_url": "",
    "email": "placeholder@placeholder.edu",
    "phone_number": "1408412312"
};

const test2 = {
    "id": "s102",
    "name": "Hubert",
    "image_url": "",
    "email": "placeholder@placeholder.com",
    "phone_number": "1408412416"
}

const Main = () => {
    const [contactList, setContactList] = useState([test1, test2]);

    return (
        <main>
            <Switch>
                <Route exact path="/"><Contacts contactList={contactList}/></Route>
                <Route exact path="/contacts"><Contacts contactList={contactList}/></Route>
                <Route exact path="/contacts/new">
                    <ContactNew 
                        contactList={contactList}
                        setContactList={setContactList}
                    />
                </Route>
                <Route 
                    path="/contacts/:id"
                    render={(routerProps) => (
                        <Contact
                            contactList={contactList}
                            contactId={routerProps.match.params.id}
                        />
                    )}
                />
            </Switch>
        </main>
    );
};

export default Main;
