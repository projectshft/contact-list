import React from "react";
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom";
import App from "./App"
//makes bootstrap available every where in app 
import "bootstrap/dist/css/bootstrap.min.css";

//browswer router should be at the top lovel of App.js and not in a component or root
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
)