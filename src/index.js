import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import {
  BrowserRouter,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import ContactForm from "./components/Contact-Form";
import Contacts from "./components/render-contact";
import { UserProvider } from "./context/User";
import Contact from "./components/Contact";
// import Test from "./components/test"

// Parent component
const App = () => (
  <div>
    <UserProvider>
      <Main />
    </UserProvider>
  </div>
);

// routes for contact form contacts view and contact detail
const Main = () => (
  <main>
    <ContactsHeader/>
    <Switch>
      <Route path="/contact-form" component={ContactForm} />
      <Route path="/contacts" component={Contacts} />
      <Route path="/contact/:contactId" component={Contact} />
    </Switch>
  </main>
);

// Contacts header which stays on top of page
const ContactsHeader = () => {
  let history = useHistory();

  return (
    <div className="heading">
      <h1 className="heading-title">Contacts</h1>
      <hr></hr>
      <button
        onClick={(e) => {
          history.push("/contact-form");
        }}
        className="btn btn-primary"
      >
        Add Contact
      </button>
      <div className="mt-4 px-2 py-3 ">
      </div>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);