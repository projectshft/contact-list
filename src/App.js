import Main from "./components/Main";
import "./App.css";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function App() {
  const [contacts, setContacts] = useState([]);
  const history = useHistory();

  useEffect(() => {
    history.push("/");
  }, []);

  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  return (
    <div className="App">
      <header className="App-header">Contact List</header>
      <Main addContact={addContact} contacts={contacts} />
    </div>
  );
}
export default App;
