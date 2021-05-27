import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import ContactList from './ContactList'

function App() {
  return (
    <div className="App">
      <h1>Contact List</h1>
      <div className="container">
        <button type="button" className="btn btn-primary">
          Add Contact
        </button>
        <ContactList />
      </div>
    </div>
  );
}

export default App;

