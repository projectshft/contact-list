import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import DisplayedList from './components/DisplayedList';
import AddContact from './components/AddContact';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={ <App /> }/>
        <Route path="/diplayed-list" element={<DisplayedList />} />
        <Route path="/add-contact/*" element={<AddContact />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

