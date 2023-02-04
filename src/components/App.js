
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import ContactInfo from './ContactInfo';
// import ContactCard from './ContactCard';


function App() {
  const LOCAL_STORAGE_KEY = 'contacts';
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    console.log(contact);
    const id = () => Math.round(Math.random()*100000000);
    setContacts([...contacts, { id, ...contact}]);
  };

  useEffect(() => {
   const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  if (retrieveContacts) setContacts(retrieveContacts);
  },[]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  },[contacts]);


  return (
    <div className="ui container">
      <Router>
        <Header />
        <Routes>
          <Route exact path='/'
           element = {<ContactList />} 
           render={(props) => (
            <ContactList 
            {...props} 
            contacts={contacts}
            />
            )}
           /> 
          <Route exact path='/add' 
           element = {<AddContact />}
           render={(props)=>(
           <AddContact 
           {...props} addContactHandler={addContactHandler}/>
           )}
       />

       <Route path='/contact/id' component={ContactInfo} />
       </Routes>
        
       {/* <AddContact addContactHandler={addContactHandler} /> */}
       {/* <ContactList contacts={contacts} />  */}
      </Router>
    </div>
  );
}



export default App;
