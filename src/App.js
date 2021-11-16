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
      id: 0,
    },
    {
      name: 'Lucy',
      phone: 8888888,
      email: 'lucytan@gmail.com',
      img: 'https://drive.google.com/uc?id=1pEHDQY2pTVhhvIF5hXHtHj23Ou9TK25k',
      id: 1,
    },
  ]);

  const addContact = (contact) => {
    setContacts(() => [...contacts, contact]);
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
              <Contacts addContact={addContact} contacts={contacts} />
            )}
          />
        </Switch>
      </div>
    </div>
  );
};

export default App;
