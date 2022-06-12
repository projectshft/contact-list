import { Link } from "react-router-dom";

const AddContact = () => {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="full-name">Full Name:</label>
        <input type="text" className="form-control" id="full-name" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" className="form-control" id="email" />
      </div>
      <div className="form-group">
        <label htmlFor="phone-number">Phone Number:</label>
        <input type="text" className="form-control" id="phone-number" />
      </div>
      <div className="form-group">
        <label htmlFor="image">Image:</label>
        <input type="text" className="form-control" id="image" />
      </div>
      <Link to="/">
        <button type="button" className="btn btn-secondary">Go Back</button>
      </Link>
      <Link to="/">
        <button type="submit" className="btn btn-primary">Submit</button>
      </Link>
    </form>
  )
}

export default AddContact;