const Home = () => (
  <div>
    <h1>Contact List</h1>
    <button type="button" className="btn btn-info">
      Add Contact
    </button>
    <hr />
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Picture</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Albert Einstein</td>
          <td>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Einstein_1921_by_F_Schmutzer_-_restoration.jpg"
              alt=""
              width="200"
              height="200"
            />
          </td>
          <td>albert@einstein.com</td>
          <td>1234567890</td>
        </tr>
        <tr>
          <td>Isaac Newton</td>
          <td>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Portrait_of_Sir_Isaac_Newton%2C_1689.jpg"
              alt=""
              width="200"
              height="200"
            />
          </td>
          <td>isaac@newton.com</td>
          <td>4567890123</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default Home;
