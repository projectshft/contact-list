import { Switch, Route } from "react-router-dom";
import FullContacts from "./FullContacts";
import NewContact from "./NewContact";
import ShowContact from "./ShowContact";

const Contacts = ({ contacts, addContact }) => (
  <Switch>
    <Route
      path="/contacts/new"
      render={(renderProps) => (
        <NewContact
          contacts={contacts}
          addContact={addContact}
          history={renderProps.history}
        />
      )}
    />
    <Route
      path="/contacts/:number"
      render={(renderProps) => (
        <ShowContact
          contactId={parseInt(renderProps.match.params.number)}
          contacts={contacts}
        />
      )}
    />
    <Route
      path="/contacts"
      render={() => <FullContacts contacts={contacts} />}
    />
  </Switch>
);

export default Contacts;
