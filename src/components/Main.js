import { Routes, Route } from 'react-router-dom';

import Contacts from './Contacts';
import Home from './Home';
import NotHome from './NotHome';

export default function Main() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="contacts/*" element={<Contacts />} />
      <Route path="*" element={<NotHome />} />
    </Routes>
  );
}
