import { Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <>
      <nav>
        <h1>Contact List</h1>
        <ul>
          <button>List</button>
          <button>Add Contact</button>
        </ul>
      </nav>

      <Routes>
        <Route path="contacts" element={<ContactsList />} />
        <Route path="contacts/new" element={<NewContact />} />
      </Routes>
    </>
  );
};

export default App;
