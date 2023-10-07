import { Route, Routes } from "react-router-dom";
import Root from "./components/Root";
import StartHere from "./components/StartHere";
import NewContact from "./components/NewContact";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import EditContact from "./components/EditContact";
import { useState } from "react";

function App() {
  const [contactList, setContactList] = useState([]);

  const addContact = (data) => {
    const copyOfContactList = [...contactList];
    copyOfContactList.push(data)
    setContactList(copyOfContactList);
  };

  const getContact = (contactId) => {
    return contactList.find((element) => element.contactId === contactId);
  };

  const allContacts = () => {
    return contactList;
  }

  console.log(contactList); // testing
    // move these functions to contacts_functions -- good for now though
  return (
    <>
      <Routes>
        <Route path="/" element={<Root allContacts={allContacts} />}>
          <Route index element={<StartHere />}/>
          <Route path="/new" element={<NewContact addContact={addContact} />} />
          <Route path="/contacts/:contactId">
            <Route index element={<Contact getContact={getContact} />} />
            <Route path="edit" element={<EditContact />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
