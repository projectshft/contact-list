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
import Contact from "./components/Contact"
import { UserProvider } from "./context/User";

// Parent component
const App = () => (
  <div>
    <UserProvider>
      <Main />
    </UserProvider>
  </div>
);

// routes for home and contact form
const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={ContactsViewHeader}></Route>
      <Route path="/contact-form" component={ContactForm}></Route>
    </Switch>
  </main>
);

// component where everything gets rendered to
const ContactsViewHeader = () => {
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
        <Contacts />
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