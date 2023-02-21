import "./App.css";
import NavBar from "./NavBar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="homepage">
          
        </div>
      </div>
    </Router>
  );
}

export default App;
