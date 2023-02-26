import NavBar from "./NavBar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddContact from "./Add";
import Information from "./Info";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="homepage">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/add">
              <AddContact />
            </Route>
            <Route path="/add/:id">
              <Information />
            </Route>
          </Switch>

        </div>
      </div>
    </Router>
  );
}

export default App;
