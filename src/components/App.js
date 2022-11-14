import '../App.css';
import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import Home from './Home';
import NewContact from './NewContact';
import ContactRoutes from './ContactRoutes';

function App() {
  const [contacts, setContacts] = useState([
    {
      id: 70219577,
      name: 'Albert Einstein',
      imageUrl:
        'https://en.wikipedia.org/wiki/Albert_Einstein#/media/File:Einstein_1921_by_F_Schmutzer_-_restoration.jpg',
      email: 'aeinstein@example.com',
      phone: '15555555555',
    },
    {
      id: 565545,
      name: 'Lebron James',
      imageUrl:
        'https://imgs.search.brave.com/3Pc2Y9CRg0Qbz_qCurjQV0uOFugUOwgc50Fbor7WbII/rs:fit:672:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5i/UWdvb2lJZDFNbzRI/LVNUQ3dheldnSGFG/TyZwaWQ9QXBp',
      email: 'ljames@example.com',
      phone: '15555555555',
    },
    {
      id: 4432131,
      name: 'Satoshi Nakamoto',
      imageUrl:
        'https://imgs.search.brave.com/pjE9t2UY-OtsKuP_uzksxTP4KT14p0jTvGhiT9OJbXk/rs:fit:600:315:1/g:ce/aHR0cHM6Ly9ibG9j/a2NoYWluc3RvY2su/YmxvYi5jb3JlLndp/bmRvd3MubmV0L2Zl/YXR1cmVzLzBFNjY4/NzlCOEE0ODJCMzg2/MUI5OTk3MDIxQkVF/Rjc1NEMyMkYxRTJF/MjVEMkQ4MjM3Mjc3/ODlCOEYwOENCN0Yu/anBn',
      email: 'snakamoto@example.com',
      phone: '18311235666',
    },
    {
      id: 28132165,
      name: 'Barack Obama',
      imageUrl:
        'https://imgs.search.brave.com/0VbCvj-9rslT19-ZKY6wU00K3Abxn6zb4RasyxIq09Y/rs:fit:592:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5j/aWdoTTZBYU93RDNj/b2VmM1E0UFJBSGFG/NyZwaWQ9QXBp',
      email: 'obama@example.com',
      phone: '19453351585',
    },
    {
      id: 81321654,
      name: 'Rip Wheeler',
      imageUrl:
        'https://imgs.search.brave.com/EH0Cpbe2y9G7UdKpGv2fIOntigLgIdq-ch7DqUo67Hg/rs:fit:768:512:1/g:ce/aHR0cHM6Ly93d3cu/d2lkZW9wZW5jb3Vu/dHJ5LmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMS8wMS9y/aXAtd2hlZWxlci1q/YWNrZXQtNC03Njh4/NTEyLnBuZw',
      email: 'rip@example.com',
      phone: '15446661234',
    },
    {
      id: 994321,
      name: 'Avatar Aang',
      imageUrl:
        'https://imgs.search.brave.com/qp5C64lSWwlHz9Tonz3w7qEHrrgzz3IqnapezYhjLl0/rs:fit:456:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC4y/eGw0dE1xampJTE5X/RksxVDFBYmdRSGFI/cyZwaWQ9QXBp',
      email: 'avatar@example.com',
      phone: '17559091881',
    },
  ]);
  // const [contacts, setContacts] = useState([])
  const [currentContact, setCurrentContact] = useState(null);

  // axios.get('./data.json').then(({ data }) => {
  //   setContacts(data.contacts);
  // });

  const addContact = (name, email, phone, imageUrl, id) => {
    const newContact = { name, email, phone, imageUrl, id };
    setContacts([...contacts, newContact]);
  };

  const deleteContact = (contactId) => {
    let foundIndex = 0;
    contacts.find((contact, index) => {
      foundIndex = index;
      return contact.id === contactId;
    });

    const newContacts = contacts;
    newContacts.splice(foundIndex, 1);
    setContacts(newContacts);
  };

  const editContact = (contactEdits) => {
    let foundIndex = 0;
    contacts.find((contact, index) => {
      foundIndex = index;
      return contact.id === contactEdits.id;
    });
    const newContacts = contacts;
    newContacts[foundIndex] = contactEdits;
    setContacts(newContacts);

    setCurrentContact(null);
  };

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route
          exact
          path="/"
          render={(routerProps) => (
            <Home
              contacts={contacts}
              setCurrentContact={setCurrentContact}
              history={routerProps.history}
            />
          )}
        />
        <Route
          path="/new-contact"
          render={(routerProps) => (
            <NewContact addContact={addContact} history={routerProps.history} />
          )}
        />
        <Route
          path="/:contactid"
          render={(routerProps) => (
            <ContactRoutes
              setCurrentContact={setCurrentContact}
              contactInfo={currentContact}
              deleteContact={deleteContact}
              editContact={editContact}
              history={routerProps.history}
            />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
