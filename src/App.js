import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import NewContact from './NewContact';
import Contact from './Contact';

function App() {
  const [contacts, setContacts] = useState([
    {
      index: 1,
      name: 'Scott Bouchard',
      email: 'holdwhatdoor@gmail.com',
      phone: '3606740888',
      imgURL: (
        <img
          src="https://scontent-sea1-1.xx.fbcdn.net/v/t1.18169-9/1377351_4732623293036_414716838_n.jpg?stp=c0.53.480.480a_dst-jpg_s851x315&_nc_cat=101&ccb=1-7&_nc_sid=c21ed2&_nc_ohc=eci7-yZXE7cAX8s7Kil&_nc_ht=scontent-sea1-1.xx&oh=00_AfDm77OMGeyh0jmSlxH32HHGESUYnvv4VM4N9rc1WLzTag&oe=6562E62E"
          alt="Invalid Link"
          height="250"
          width="250"
        />
      ),
    },
    {
      index: 2,
      name: 'John Doe',
      email: 'rjd@yahoo.com',
      phone: '5555555555',
      imgURL: (
        <img
          src="https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/278182625_10216502601637066_370310320185790075_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Cjm4VE-oSEMAX--msJm&_nc_ht=scontent-sea1-1.xx&oh=00_AfAqu6DGxPVVWvbJGWD1gc_awoaD9lAlqNOL2rSqb8kMjg&oe=6541177E"
          alt="Invalid Link"
          height="250"
          width="250"
        />
      ),
    },
    {
      index: 3,
      name: 'Jive Turkeys',
      email: 'gobbleGobble@gobble.com',
      phone: '123456789',
      imgURL: (
        <img
          src="https://scontent-sea1-1.xx.fbcdn.net/v/t1.18169-9/534154_3313540696858_1477825511_n.jpg?stp=c120.0.720.720a_dst-jpg_s851x315&_nc_cat=106&ccb=1-7&_nc_sid=c21ed2&_nc_ohc=hfVMsS-1_wUAX8cAbSO&_nc_ht=scontent-sea1-1.xx&oh=00_AfCU0BXEXzbNhKUctnvbeuYAT8Lcy3DUUQty8OP_c8T_bg&oe=6562C192"
          alt="Invalid Link"
          height="250"
          width="250"
        />
      ),
    },
  ]);

  const addContact = (contact) => {
    // eslint-disable-next-line no-shadow
    setContacts((contacts) => [...contacts, contact]);
  };

  return (
    <div>
      <div>
        <Routes>
          <Route
            exact
            path="/"
            element={<Home addContact={addContact} contacts={contacts} />}
          />
          <Route
            path="/contacts/newcontact"
            element={<NewContact addContact={addContact} contacts={contacts} />}
          />
          <Route
            path="/contacts/:index"
            element={
              <Contact
                contactId={parseInt(contacts.index, 10)}
                contacts={contacts}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
