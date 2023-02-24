import { useState } from 'react';
import { useRoutes } from 'react-router-dom';
import Home from './Pages/Home.js';
import Contacts from './Pages/Contacts.js';
import NewContact from './Pages/NewContact.js';
import Profile from './Pages/Profile.js';
import NoMatch from './Pages/NoMatch.js';


function App() {
    const [contacts, setContacts] = useState([]);

    const createContact = async ({name, email, phone, image}) => {
        const phoneFormat = phone.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
        const updatedContacts = [
            ...contacts,
            {
                id: (Math.round(Math.random() * 10000)).toString(),
                name,
                email,
                phone: phoneFormat,
                image
            },
        ];
        setContacts(updatedContacts);
    }

    const deleteContactById = (id) => {
        if (window.confirm("Confirm Delete Contact?") === true) {
            const updatedContacts = contacts.filter((contact) => {
                return contact.id !== id;
        });
        setContacts(updatedContacts);
    }}

    const routes = useRoutes([
        {
            path: '/',
            element: <Home />
        },
        {
            path: 'contacts',
            children: [
                {
                    path: '',
                    element: <Contacts onDelete={deleteContactById} contacts={contacts} />
                },
                {
                    path: 'new',
                    element: <NewContact onSubmit={createContact} />
                },
                {
                    path: ':id',
                    element: <Profile contacts={contacts} />
                }
            ]
        },
        {
            path: '*',
            element: <NoMatch />
        }
    ]);

    return routes;
}

export default App;