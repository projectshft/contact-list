import AddContacts from "./AddContacts";
import FullList from "./FullList";
import { Routes, Route, Link } from 'react-router-dom';

const Main = () => {
  // const toAddContacts = () => {
  //   console.log('click test');
  // }
  
  return (
    <div>
      <Link to="/add-contacts">Add Contact</Link>
      <Routes>
        <Route exact path ="/" element={<FullList/>}/>
        <Route path="/add-contacts" element={<AddContacts/>}/>
      </Routes>
    </div>
  )
}

export default Main