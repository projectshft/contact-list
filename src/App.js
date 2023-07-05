import { Routes, Route, Link } from "react-router-dom";
import ContactsList from "./ContactsList";
import NewContact from "./NewContact";

const App = () => {
  return (
    <>
      <nav>
        <h1>Carlys Contact List App</h1>
        <ul>
          <button>
            <Link to="contacts">List</Link>
          </button>
          <button>
            <Link to="contacts/new">Add Contact</Link>
          </button>
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
