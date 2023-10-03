import { Route, Routes } from "react-router-dom";
import Root from "./components/Root";
import StartHere from "./components/StartHere";
import NewContact from "./components/NewContact";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import EditContact from "./components/EditContact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<StartHere />}/>
          <Route path="/new" element={<NewContact />} />
          <Route path="/contacts/:contactId">
            <Route index element={<Contact />} />
            <Route path="edit" element={<EditContact />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
