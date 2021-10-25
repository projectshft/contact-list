import { Switch, Route } from 'react-router-dom';
import React, { useState } from 'react';
import NavigationBar from './NavigationBar';
import ContactsList from './ContactsList';
import NewContact from './NewContact';
import ContactDetailView from './ContactDetailView';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const App = () => {
  const [contacts, setContacts] = useState([
    {id: 0, firstName: "George", lastName: "Washington", imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg/1280px-Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg", email: "george@whitehouse.gov", phoneNumber: "(202) 456-1414"},
    {id: 1, firstName: "John", lastName: "Adams", imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/John_Adams%2C_Gilbert_Stuart%2C_c1800_1815.jpg/1280px-John_Adams%2C_Gilbert_Stuart%2C_c1800_1815.jpg", email: "john@whitehouse.gov", phoneNumber: "(202) 456-1414"},
    {id: 2, firstName: "Thomas", lastName: "Jefferson", imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Thomas_Jefferson_by_Rembrandt_Peale%2C_1800.jpg/1280px-Thomas_Jefferson_by_Rembrandt_Peale%2C_1800.jpg", email: "thomas@whitehouse.gov", phoneNumber: "(202) 456-1414"},
    {id: 3, firstName: "James", lastName: "Madison", imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/James_Madison.jpg/1280px-James_Madison.jpg", email: "james@whitehouse.gov", phoneNumber: "(202) 456-1414"},
    {id: 4, firstName: "James", lastName: "Monroe", imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/James_Monroe_White_House_portrait_1819.jpg/1280px-James_Monroe_White_House_portrait_1819.jpg", email: "james2@whitehouse.gov", phoneNumber: "(202) 456-1414"}
  ]);


  const sortContacts = (sortVariable) => {

    if(sortVariable === 'dateAdded'){
      const sortedByDateAdded = [...contacts].sort((a,b) => {
        return a.id - b.id;
      });
      setContacts(sortedByDateAdded);
    }
    
    if(sortVariable === 'firstName'){
      const sortedByFirstName = [...contacts].sort((a,b) => {
        const nameA=a.firstName.toLowerCase();
        const nameB=b.firstName.toLowerCase();
        if (nameA < nameB) {
          return -1
        } else if (nameA > nameB) {
          return 1
        } else {
          return 0
        }
      });
      setContacts(sortedByFirstName);
    }

    if(sortVariable === 'lastName'){
      const sortedByLastName = [...contacts].sort((a,b) => {
        const nameA=a.lastName.toLowerCase();
        const nameB=b.lastName.toLowerCase();
        if (nameA < nameB) {
          return -1
        } else if (nameA > nameB) {
          return 1
        } else {
          return 0
        }
      });
      setContacts(sortedByLastName);
    }

  };

  const addContact = (newContact) => {
    setContacts((origContacts) => [...origContacts, newContact]);
    sortContacts();
  };


  return (
    <div className="container-fluid">
      <NavigationBar />
      <br />
      <Switch>
        <Route
          exact path="/"
          render={() => (
            <ContactsList sortContacts={sortContacts} contacts={contacts} />
          )}
        />
        <Route path="/contacts/new" render={(routerProps) => (
            <NewContact
              history={routerProps.history}
              contacts={contacts}
              addContact={addContact}
            />
          )}
        />
        <Route path='/contacts/:id' render={(routerProps) => (
          <ContactDetailView 
            contactId={parseInt(routerProps.match.params.id, 10)} 
            contacts={contacts}
          />
          )}
        />
      </Switch>
      <br />
      <br />
    </div>
  );
};

export default App;
