import ContactTable from './ContactTable';

function App() {
  return (
    <div>
      <div className="row">      
        <div className="col-md-6 offset-md-3">
          <h1>Contact List</h1>
          <button className="add-btn btn btn-primary">Add Contact</button>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 offset-md-3">
          <ContactTable/>
        </div>
      </div>
    </div>
  );
}

export default App;
