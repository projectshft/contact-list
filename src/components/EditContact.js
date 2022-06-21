import { Link } from 'react-router-dom';

const EditContact = () => {

  const formHandler = (
    <form>
      <div className="form-group">
        <label htmlFor="name-input">Full Name</label>
        <input 
          type="text" 
          className="form-control" 
          id="name-input" 
        />
      </div>
      <div className="form-group">
        <label htmlFor="email-input">Email Address</label>
        <input 
          type="text" 
          className="form-control" 
          id="email-input" 
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone-input">Phone Number</label>
        <input 
          type="number" 
          className="form-control" 
          id="phone-input" 
        />
      </div>
      <div className="form-group">
        <label htmlFor="img_url">Image URL</label>
        <input 
          type="email" 
          className="form-control" 
          id="img_url" 
        />
      </div>
    </form>
  )

  const goBackHandler = (
    <Link to="/contacts">
      <button className="btn btn-secondary">Go Back</button>
    </Link>
  )

  return (
    <div>
      {formHandler}
      {goBackHandler}
    </div>
  )
}

export default EditContact;