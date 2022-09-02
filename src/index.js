import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ContactList from './pages/ContactList.js'
import AddContact from './pages/AddContact.js';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import {useState} from 'react';



const App = () => (
  <div>
    <Main />
  </div>
);

const Main = () => {
  const [contactGroup, setContactGroup] = useState({});
  // setContactGroup(props.AddContact.passChildData)
  

  return <main>
    <Switch>
      <Route exact path ="/" component={ContactList}/>
      {/* <Route path="/contact" component = {ContactInfo} />  */}
      <Route path="/addcontact" component={AddContact} passChildData={setContactGroup}/>
    </Switch>
    </main>
 }

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


