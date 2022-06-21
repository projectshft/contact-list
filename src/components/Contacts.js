import { Link } from 'react-router-dom';

const Contacts = (props) => {
  
  const addContactButton = (
    <Link to='/contacts/new'>
      <button className="btn btn-primary">Add Contact</button>
    </Link>   
  )
  
  const listContacts = props.formData.map((data, i) => {
    const imageToString = String(data.img)
    const altToString = String(data.name)
    
    const fullContact = (
      <tr>
        <th scope="row">{i + 1}</th>
        <td><img className="list-img" src={imageToString} alt={altToString}/>{data.name}</td>
        <td>{data.name}</td>
        <td>{data.email}</td>
        <td>{data.phone}</td>
      </tr>
    )
    return fullContact;
  })


  return (
    <div>
      {addContactButton}
      <table className='table table-striped'>
        <thead className='table-dark'>
          <tr>
          <th scope="col">#</th>
          <th scope="col">Image</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Phone #</th>
          </tr>
        </thead>
        <tbody>
          {listContacts}
        </tbody>
      </table>
    </div>
  )
}

export default Contacts;