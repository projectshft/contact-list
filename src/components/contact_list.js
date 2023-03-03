const ContactList = () => {
  const contacts = {
      id: 70219577,
      name: "Albert Einstein",
      image_url: "https://en.wikipedia.org/wiki/Albert_Einstein#/media/File:Einstein_1921_by_F_Schmutzer_-_restoration.jpg",
      email: "aeinstein@example.com",
      phone_number: "15555555555"
    }
  console.log(contacts.image_url)
  return (
      /*<h1>List of Contacts</h1>*/
      <div className="container-fluid">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>Profile Pic</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            <tr>
              <td><img className="img" src={contacts.image_url} alt=""/></td>
              <td>{contacts.name}</td>
              <td>{contacts.email}</td>
              <td>{contacts.phone_number}</td>
            </tr>
            <tr>
              <th>2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th>3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
        <button type="button" className="btn btn-primary">Add Contact</button>
      </div>
  )
};

export default ContactList;