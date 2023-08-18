import { Routes, Route } from 'react-router-dom';
import ContactList from './ContactList';
import ContactCard from './ContactCard';
import AddContact from './AddContact';

const Main = ({contacts}) => (
  <main>
    <Routes>
      <Route exact path='/' element={<ContactList contacts={contacts}/>} />
      <Route path='contacts/:id' element={<ContactCard contacts={contacts} />} />
      <Route path='contacts/add' element={<AddContact />} />
    </Routes>
  </main>


);

export default Main;

