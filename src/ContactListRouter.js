import { Switch, Route } from "react-router-dom";
import AddContact from "./AddContact.js";
import Contact from "./Contact.js";
import ContactList from "./ContactList.js";

const ContactListRouter = ({ contacts, addContact }) => (
  <Switch>
    <Route
      path="/add-contact"
      render={(routerProps) => (
        <AddContact
          history={routerProps.history}
          contacts={contacts}
          addContact={addContact}
        />
      )}
    />

    <Route
      path="/:id"
      render={(routerProps) => (
        <Contact
          contactId={parseInt(routerProps.match.params.id, 8)}
          contacts={contacts}
        />
      )}
    />

    <Route
      exact path="/"
      render={() => (
        <ContactList
          contacts={contacts}
        />
      )}
    />
  </Switch>
);

export default ContactListRouter;
