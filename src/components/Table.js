const Table = (props) => {
  console.log(props.contacts)
  return (
    <div className="col-md-8 offset-md-2 padding">
      <table className="table table-hover table-bordered">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Profile Picture</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone Number</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>i</td>
            <td>d</td>
            <td>r</td>
            <td>k</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
};


export default Table;
