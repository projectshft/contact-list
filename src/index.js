import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import App from "./App";
import NewContact from "./components/new_contact";
import ErrorPage from "./components/error";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactDetail from "./components/contact_detail";

window.history.replaceState({}, document.title);

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
     <Routes>
      <Route path="/contacts" element={<App />} />
      <Route path="/contacts/new" element={<NewContact/>} />
      <Route path="/contacts/:id" element={<ContactDetail/>} />
      <Route path ="*" element={<ErrorPage/>}/>
    </Routes>
  </BrowserRouter>,
  rootElement
);