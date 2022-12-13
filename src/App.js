import Header from "./components/Header"
import Main from "./components/Main"
import "./index.css";

//app function that displays header and main
const App = () => (
  <div className="App container">
    <div className="row">
      <div className="col">
      </div>
      <div className="col order-2" align="center">
        <Header />
      </div>
      <div className="col order-3">
      </div>
    </div>
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <Main />
      </div>
    </div>
  </div>
);

export default App;