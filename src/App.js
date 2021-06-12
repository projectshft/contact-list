import './App.css';

function App() {
  return (
    <div className="App">
      <div className="row">
        <header className="App-header">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1>Contact List</h1>
          </div>
        </header>
      </div>

      <div className="row">
        <div className="col-md-6 offset-md-3">
          <button className="btn btn-primary">Add Contact</button>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3"></div>
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th scope="col">Profile Pic</th>
                <th scope="col">Name</th>
                <th scope="col">E-mail</th>
                <th scope="col">Phone Number</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </div>
  );}

export default App;
