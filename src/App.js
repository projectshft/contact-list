import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import New from './components/New';
import ViewContact from './components/ViewContact';
import ContactsList from './components/ContactsList';
import 'bootstrap/dist/css/bootstrap.min.css';

const Contacts = (props, createNew) => {
  return (
    <Routes>
      <Route exact path="/contacts" element={<ContactsList contacts={props.contacts}/>}/>
      <Route exact path="/contacts/:id" element={<ViewContact contacts={props.contacts} />}/>
      <Route exact path="/new" element={<New createNew={props.createNew} />}/>
    </Routes>
  )
}

const Main = () => {
  let clickedId = null;
  const [contacts, setContact] = useState([
    {
      id: 298484572,
      name: "Michael Scott",
      email: "michael@dundermifflin.com",
      phone: 9999999999,
      img_url: "https://cdn3.whatculture.com/images/2021/04/d81733f712331d8a-1200x675.jpg"
    },
    {
      id: 348539984,
      name: "Tom Holland",
      email: "spiderman@tomholland.com",
      phone: 5555555555,
      img_url: "https://www.biography.com/.image/t_share/MTQ4MTUwOTQyMDE1OTU2Nzk4/tom-holland-photo-jason-kempin-getty-images-801510482-profile.jpg"
    },
    {
      id: 983244523,
      name: "The Queen of England",
      email: "queen@england.com",
      phone: 4444444444,
      img_url: "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/rockcms/2021-12/211216-queen-mb-1223-cc1555.jpg"
    },
    {
      id: 919423285,
      name: "Cat",
      email: "cat@gmail.com",
      phone: 2930530983,
      img_url: "https://cdn.mos.cms.futurecdn.net/VSy6kJDNq2pSXsCzb6cvYF-1200-80.jpg"
    }
  ]);
  console.log(contacts)

  const createNew = (c) => {
    console.log(c)
    setContact((x) => [
      ...x, c
    ]);
  }

  return (
    <main>
      <Routes>
        <Route exact path="/*" element={<Contacts clickedId={clickedId} contacts={contacts} createNew={createNew} />}/>
        
      </Routes>
    </main>
  )
}

const App = () => {
  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;