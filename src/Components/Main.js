import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Contacts from './Contacts.js'
import ContactNew from './ContactNew.js'

const test1 = {
    "id": 101,
    "name": "Nathan Pak",
    "image_url": "",
    "email": "njpak@ucsc.edu",
    "phone_number": "14084895127"
};

const test2 = {
    "id": 102,
    "name": "Hubert",
    "image_url": "",
    "email": "nathan.j.pak@gmail.com",
    "phone_number": "14084895126"
}

const Main = () => {
    const [contactList, setContactList] = useState([test1, test2]);

    return (
        <main>
            <Switch>
                <Route exact path="/"><Contacts contactList={contactList}/></Route>
                <Route exact path="/contacts"><Contacts contactList={contactList}/></Route>
                <Route path="/contacts/new">
                    <ContactNew 
                        contactList={contactList}
                        setContactList={setContactList}
                    />
                </Route>
            </Switch>
        </main>
    );
};

export default Main;
