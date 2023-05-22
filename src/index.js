import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import AddNewContact from './components/add_new_contact';



const App = () => {
  return (
    <div>
      <AddNewContact />
    </div>
  );
};


// const Contacts = () => (
//   <div>
//     <h1>Contacts page</h1>
//   </div>
// );

// const NewContacts = () => <h1>New Contacts</h1>;

// const Id = () => <h1>Player ID</h1>;

// const Main = () => (
//   <main>
//     <Routes>
//       <Route exact path="/" element={Contacts} />
//       <Route path="/contacts/new" element={NewContacts} />
//       <Route path="/contacts/id" element={Id} />
//     </Routes>
//   </main>
// );

ReactDOM.render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
      <App />
      {/* </BrowserRouter> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
