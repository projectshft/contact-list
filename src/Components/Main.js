import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Contacts from './Contacts';
import ContactNew from './ContactNew';
import Contact from './Contact';

const Main = () => {
  // set up array in state for contact list
  const [contactList, setContactList] = useState([]);

  return (
    <main>
      <Switch>
        {/* I don't know if this is necessary, but use two routes so that
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
          render={(routerProps) => (
            <Contact
              contactList={contactList}
              setContactList={setContactList}
              contact={contactList.find(
                (c) => c.id === routerProps.match.params.id
              )}
            />
          )}
        />
      </Switch>
    </main>
  );
};

export default Main;
