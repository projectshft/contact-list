const ContactList = () => {
  return (
    <div>
      <h1 className="text-center mt-5">Contact List</h1>
      <div className="justify-content-center mx-5" >
        <a className="btn btn-primary" href="/contacts/new" role="button">
          Add Contact
        </a>
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
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContactList;
