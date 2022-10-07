import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import ContactList from './pages/ContactList';
import Contact from './pages/Contact';
import NewContact from './pages/NewContact';
import EditContact from './pages/EditContact';
import './App.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/contacts" element={<ContactList />}>
        <Route path=":contactId" element={<Contact />} />
        <Route path=":contactId/edit" element={<EditContact />} />
        <Route path="new-contact" element={<NewContact />} />
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
