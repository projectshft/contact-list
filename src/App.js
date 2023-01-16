import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './data.json'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import NewContact from './NewContact';
import Contact from './Contact.js';
import Main from './Main';


function App() {
  console.log('data', data)
  console.log('image', data.contacts[0].image_url)
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main/>} />
        <Route path="/contact/new" element={<NewContact/>} />
        <Route path='/contact/:id' element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

