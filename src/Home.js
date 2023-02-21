import {  useEffect, useState } from "react";
import ContactList from "./ContactList";
import axios from 'axios';




const Home = () => {
  const [contacts, setContacts] = useState(null)

  const path = "db/users.json";

  //   [
  //   {image: "https://assets.stickpng.com/thumbs/585e4beacb11b227491c3399.png", name: "Thomas", phone: "555-555-5555", email: "tmoney@gmail.com", id: 1},
  //   {image: "https://assets.stickpng.com/thumbs/585e4beacb11b227491c3399.png", name: "Jim", phone: "333-333-3333", email: "jmoney@t.com", id: 2}
  // ]);

  const handleDelete =( id ) => {
    const newContact = contacts.filter(cont => cont.id !== id);
    setContacts(newContact);
  }

  useEffect(() => {
    axios.get(path)
    .then(response => {
      Object.keys(response.data).forEach(function(key) {
        const needData = response.data[key]
        setContacts(needData)
        console.log(key, response.data[key])
      })
    })
    .catch(function (error)  {
      console.log(error);
    })
  }, [])

  


  return (
    <div className="home">
      {contacts && <ContactList contacts={contacts} title="Contacts" handleDelete={handleDelete} />}
    </div>
    );
}
 
export default Home;