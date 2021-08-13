function ContactTable(props) {
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
        {props.contacts.map((contact) => {
          return (
            <tr key={contact.id.toString()}>
              <th scope="row"><img src={contact.imgUrl}></img></th>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.number}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default ContactTable;