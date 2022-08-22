import { Routes, Route, Navigate } from 'react-router-dom';
import Contacts from './Contacts';
import PageNotFound from './PageNotFound';

export default function Main() {
  return (
    <Routes>
      <Route index element={<Navigate replace to="/contacts" />} />
      <Route path="contacts/*" element={<Contacts />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
