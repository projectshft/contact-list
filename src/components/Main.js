import { Routes, Route } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Contacts from './Contacts';

export default function Main() {
  return (
    <>
      <h1>{uuidv4()}</h1>
      <Routes>
        <Route path="/*" element={<Contacts />} />
        <Route path="contacts/*" element={<Contacts />} />
      </Routes>
    </>
  );
}
