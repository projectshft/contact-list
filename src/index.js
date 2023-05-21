import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => (
  <div>MAIN
    <Main />
  </div>
)


const Main = () => (
  <main>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/contacts" element={<ContactsList />} />
      <Route path="/new" element={<New />} />
      <Route path="/contacts/:number" element={<Contact />} />
    </Routes>
  </main>
)

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
