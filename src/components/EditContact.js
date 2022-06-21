import { Link } from 'react-router-dom';


const EditContact = () => {
  const goBackHandler = (
    <Link to="/contacts">
      <button className="btn btn-secondary">Go Back</button>
    </Link>
  )

  return (
    <div>
      {goBackHandler}
    </div>
  )
}

export default EditContact;