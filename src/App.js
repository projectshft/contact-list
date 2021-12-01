import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div class="container-fluid justify-content-md-center">
      <br/>
      <div class="row">
        <div class="col">
          <h1>Contact List</h1>
        </div>
      </div>
      <br/>
      <div class="row">
        <div class="col">
          <button type="button" class="btn btn-primary">
          Add Contact
          </button>
        </div>
      </div>
      <br/>
      <div class="row" id="main-grid">
        <div class="col-sm"><h6>Profile Pic</h6></div>
        <div class="col-sm"><h6>Name</h6></div>
        <div class="col-sm"><h6>Email Address</h6></div>
        <div class="col-sm"><h6>Phone Number</h6></div>
      </div>
    </div>
  );
}

export default App;
