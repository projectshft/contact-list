import React from 'react';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import ContactList from './ContactList';
import AddContact from './AddContact'; 
import Contact from './Contact';
import Header from './Header';



  const App = () => (
  
    <div>
      <Main />
    </div>

  );
  


const Main = () => (
  <main>
    <Header/>  
    <Switch>
      <Route exact path="/contacts" component={AllContacts}/>
      <Route path="/contacts/new"> <AddContact/></Route> 
    </Switch>
  </main>
);

const AllContacts = () => (
  <Switch>
    <Route path="/contacts" component={ContactList}/>
    <Route path="/contacts/:id" component={Contact}/>  
  </Switch>
);

export default App;

