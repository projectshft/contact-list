import HomePage from "./components/Home";
import Add from "./components/Add";
import "./App.css";
import { ContactProvider } from "./components/Context";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/NavBar";
import ContactDetails from "./components/Individual";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <ContactProvider>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/addContact">
              <Add />
            </Route>
            <Route path="/:id" children={<ContactDetails />} />
          </Switch>
        </ContactProvider>
      </Router>
    </div>
  );
}

export default App;
