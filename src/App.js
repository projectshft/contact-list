import { Switch, Route } from 'react-router-dom';
import React from 'react';
import Header from './components/Header';
import Button from './components/Button';
import New from './components/New';
import Contacts from './components/Contacts';

const App = () => (
  <div>
    <Switch>
      <Route
        exact
        path="/"
        render={() => (
          <>
            <Header />
            <Button />
          </>
        )}
      />
      <Route path="/contacts/new" component={New} />
      <Route path="/contacts" component={Contacts} />
    </Switch>
  </div>
);
export default App;
