const Index = () => (
  <main>
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Home
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/AddContact">
                  Add Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Index">
                  Index
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <h1>Index Page</h1>
      <hr />
      <div className="container">
        <div className="row">
          <div className="col-md-10 offset-1">
            <table className="table table-bordered">
              <thead className="table-dark">
                <tr>
                  <th scope="col">Avatar</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone Number</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img
                      src="https://upload.wikimedia.org/wikipedia/en/f/f7/Jason_Voorhees_%28Ken_Kirzinger%29.jpg"
                      alt="Profile"
                      width="200"
                      height="200"
                    />
                  </td>
                  <td>Jason Voorhees</td>
                  <td>J.Voorhees@campclmail.com</td>
                  <td>5550123</td>
                </tr>
                <tr>
                  <td>
                    <img
                      src="https://upload.wikimedia.org/wikipedia/en/e/eb/Freddy_Krueger_%28Robert_Englund%29.jpg"
                      alt="Profile"
                      width="200"
                      height="200"
                    />
                  </td>
                  <td>Freddy Krueger</td>
                  <td>nghtmronelmstreet@gmail.com</td>
                  <td>8675309</td>
                </tr>
                <tr>
                  <td>
                    <img
                      src="https://gray-wwny-prod.cdn.arcpublishing.com/resizer/rnbmO_5GqgZXHTY9VOZzMQ3_V1M=/1200x1800/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/WQCWCUYTCBEBNOVPMEYPRQJCSI.jpg"
                      alt="Profile"
                      width="200"
                      height="200"
                    />
                  </td>
                  <td>PennyWise</td>
                  <td>timetofloat@derrymail.com</td>
                  <td>1234564</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </main>
);

export default Index;
