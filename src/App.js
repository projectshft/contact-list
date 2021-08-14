import logo from './logo.svg';
import './App.css';
import Contacts from './components/contactList';
import {BrowserRouter, Route, Switch} from "react-router-dom";

const Main = () => (
  <Switch>
    <Route exact path="/" component={Contacts} />
    {/* //  need to change component below */}
    <Route path="/compiledContacts" component={Contacts} />
    
  </Switch>
)

function App() {
  return (
        <BrowserRouter>
        <Main />
        </BrowserRouter>
        
  )   
}

export default App;
