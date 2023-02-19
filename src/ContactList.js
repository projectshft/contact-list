import { Link, useHistory } from "react-router-dom";

const ContactList = () => {
  const history = useHistory();

  const handleRowClick = () => {
    history.push("/contacts/num");
  };

  return (
    <div>
      <h1 className="text-center mt-5">Contact List</h1>
      <div className="align-content-center mx-5 w-75 mx-auto">
        <Link to="/contacts/new">
          <a className="btn btn-primary" role="button">
            Add Contact
          </a>
        </Link>
        <table className="table table-hover table-bordered mt-3">
          <thead>
            <tr>
              <th scope="col">Profile Pic</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone Number</th>
            </tr>
          </thead>
          <tbody>
            <tr onClick={handleRowClick}>
              <td className="">
                <img
                  className="mx-auto d-block img-fluid"
                  src="https://image.shutterstock.com/image-photo/stock-photo-head-shot-portrait-close-up-smiling-confident-businessman-wearing-glasses-looking-at-camera-250nw-1714666150.jpg"
                />
              </td>
              <td className="align-middle">Mark Otto</td>
              <td className="align-middle">MarkOtto@gmail.com</td>
              <td className="align-middle">5555555555</td>
            </tr>
            <tr>
              <th scope="row" className="text-center">
                <img />
              </th>
              <td className="align-middle">Jacob Thornton</td>
              <td className="align-middle">jthornton@gmail.com</td>
              <td className="align-middle">1234567890</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContactList;
