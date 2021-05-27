import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import ContactList from "./ContactList";
import AddContact from "./AddContact";
import { Route, BrowserRouter } from "react-router-dom";

export const ContactContext = React.createContext();

function App() {
  const contacts = [
    {
      id: 70219577,
      name: "Aaron Hayslip",
      image_url:
        "https://pbs.twimg.com/profile_images/1364965517526769664/5fwOCY83_400x400.jpg",
      email: "ahayslip@parsity.com",
      phone_number: "15555555555",
    },
    {
      id: 70216677,
      name: "Another",
      image_url:
        "https://pbs.twimg.com/profile_images/1364965517526769664/5fwOCY83_400x400.jpg",
      email: "hayslip@example.com",
      phone_number: "15455625555",
    },
  ];
  return (
    <div>
      <h1>Contact List</h1>
      <div className="container">
        <BrowserRouter>
          <ContactContext.Provider value={contacts}>
            <Route exact path="/" component={ContactList} />
            <Route path="/new" component={AddContact} />
            <Route path="/contacts" component={ContactList} />
          </ContactContext.Provider>
        </BrowserRouter>
        {/* <ContactList contacts={contacts} /> */}
      </div>
    </div>
  );
}

export default App;
