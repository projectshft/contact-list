import AddContacts from "./AddContacts";
import FullList from "./FullList";
import { Routes, Route } from 'react-router-dom';

const Main = () => {
  return (
    <div>
      <button type="button" className="btn btn-primary">Add Contact</button>
      <Routes>
        <Route exact path ="/" element={<FullList/>}/>
        <Route path="/add-contacts" element={<AddContacts/>}/>
      </Routes>
    </div>
  )
}

export default Main