import { useState, useContext } from "react";
import { useContacts } from "./Context";

const HomePage = () => {
  const myContacts = useContacts();
  
  return ( 
    <div className="home">
      <ul>
        {myContacts.map(contact => (
          <li key={contact.id}>{contact.name}</li>
        ))}
      </ul>
    </div>
   );
}
 
export default HomePage;