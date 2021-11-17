import { Switch, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Contacts from './Contacts';
import Home from './Home';
import Header from './Header';

const App = () => {
  const [contacts, setContacts] = useState([
    {
      name: 'Nina',
      phone: 9107332385,
      email: 'ninavtan@gmail.com',
      img: 'https://drive.google.com/uc?id=1bTnKECNkLhXsDZ3EoFcB4OjjK0SDsLBK',
      userId: 0,
    },
    {
      name: 'Lucy',
      phone: 8888888,
      email: 'lucytan@gmail.com',
      img: 'https://drive.google.com/uc?id=1pEHDQY2pTVhhvIF5hXHtHj23Ou9TK25k',
      userId: 1,
    },
  ]);

  const addContact = (contact) => {
    setContacts(() => [...contacts, contact]);
  };

  const deleteContact = (id) => {
    //   // eslint-disable-next-line eqeqeq
    console.log(`This is the ID: ${id}`);
    const newContacts = contacts.filter((c) => c.userId !== parseInt(id, 10));
    console.log(newContacts);
    setContacts(newContacts);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <Header contacts={contacts} />
        </div>
      </div>

      <div className="contacts row">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/contacts"
            render={() => (
              <Contacts
                addContact={addContact}
                deleteContact={deleteContact}
                contacts={contacts}
              />
            )}
          />
        </Switch>
      </div>
    </div>
  );
};

export default App;
