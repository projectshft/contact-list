import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import App from "./App";
import NewContact from "./components/new_contact";
import ErrorPage from "./components/error";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
     <Routes>
      <Route path="/" element={<App />} />
      <Route path="/form" element={<NewContact/>} />
      <Route path ="*" element={<ErrorPage/>}/>
    </Routes>
  </BrowserRouter>,
  rootElement
);