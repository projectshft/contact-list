import AddContacts from "./AddContacts";
import FullList from "./FullList";
import { Routes, Route } from 'react-router-dom';

const Main = () => {
  return (
    <Routes>
      <Route exact path ="/" element={<FullList/>}/>
      <Route path="/add-contacts" element={<AddContacts/>}/>
  </Routes>
  )
}

export default Main