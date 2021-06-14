import './App.css';
import ContactList from './ContactList.js';
import AddContact from './AddContact.js';
import DisplayContact from './DisplayContact.js';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <div className="row">
        <header className="App-header">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1>Contact List</h1>
          </div>
        </header>
      </div>

        <Switch>
          <Route exact path='/' component={ContactList} />
          <Route path='/AddContact' component={AddContact} />
          <Route path='/DisplayContact' component={DisplayContact} />
        </Switch>
      </div>
    </BrowserRouter>
  
  );}

