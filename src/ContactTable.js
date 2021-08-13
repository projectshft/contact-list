function ContactTable() {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Profile Pic</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Number</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Sans_undertale.jpg/220px-Sans_undertale.jpg"></img>
          </th>
          <td>Otto Frankel</td>
          <td>ottofrankel@email.com</td>
          <td>11111111</td>
        </tr>
        <tr>
          <th scope="row"><img src="https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg"></img></th>
          <td>Dwayne</td>
          <td>dwayne@therock.com</td>
          <td>111111111</td>
        </tr>
      </tbody>

    </table>
  )
}

export default ContactTable;