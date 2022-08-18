import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Contacts from './Contacts';
import ContactNew from './ContactNew';
import Contact from './Contact';

// const test1 = {
//     "id": "q101",
//     "name": "Nathan Pak",
//     "image_url": "",
//     "email": "placeholder@placeholder.edu",
//     "phone_number": "1408412312"
// };

// const test2 = {
//     "id": "s102",
//     "name": "Hubert",
//     "image_url": "",
//     "email": "placeholder@placeholder.com",
//     "phone_number": "1408412416"
// }

const Main = () => {
  // set up array in state for contact list
  const [contactList, setContactList] = useState([]);

  return (
    <main>
      <Switch>
        {/* don't know if this is necessary, but use two routes so that
                "/" and "/contacts" both display contact list */}
        <Route exact path="/">
          <Contacts contactList={contactList} setContactList={setContactList} />
        </Route>
        <Route exact path="/contacts">
          <Contacts contactList={contactList} setContactList={setContactList} />
        </Route>

        {/* route to the page that adds a new contact */}
        <Route exact path="/contacts/new">
          <ContactNew setContactList={setContactList} />
        </Route>

        {/* route to the page for individual contact info */}
        <Route
          path="/contacts/:id"
          render={(routerProps) => {
            const contact = contactList.find(
              (c) => c.id === routerProps.match.params.id
            );
            return (
              <Contact
                // contactList={contactList}
                // contactId={routerProps.match.params.id}
                name={contact.name}
                email={contact.email}
                phoneNumber={contact.phone_number}
                imageUrl={contact.image_url ? contact.image_url : undefined}
              />
            );
          }}
        />
      </Switch>
    </main>
  );
};

export default Main;
