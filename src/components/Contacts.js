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
      // <ul key={i}>
      //   <li>{data.name}</li>
      //   <li>{data.email}</li>
      //   <li>{data.phone}</li>
      //   <li><img className="list-img" src={imageToString} alt={altToString}/></li>
      // </ul>
      <tr>
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
      <table className='table'>
        <thead>
          <tr>
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