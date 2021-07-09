import { Link } from "react-router-dom";

const Home = ({ contacts }) => (
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <div class="page-header">
          <h1 class="text-center">Yerkie's Contact List</h1>
        </div>

        <Link to="/ContactForm">
          <button class="btn btn-primary">Add Contact</button>
        </Link>

        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Picture</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Info</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact, index) => (
              <tr key={contact.number}>
                <th scope="row">{index + 1}</th>
                <td>
                  <img
                    src={contact.imageURL}
                    alt={contact.name}
                    className="list-image"
                  />
                </td>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.phone}</td>
                <td>
                  <Link to="/:{contact.number}">
                    <button class="btn btn-primary">Info</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export default Home;
