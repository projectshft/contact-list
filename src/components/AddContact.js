import { Link } from "react-router-dom";

const AddContact = () => {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="full-name">Full Name</label>
        <input type="text" className="form-control" id="full-name" />
      </div>
      <div className="form-group">
      </div>
      <div className="form-group">
      </div>
      <div className="form-group">
      </div>
      <Link to="/">
        <button type="button" className="btn btn-secondary">Go Back</button>
      </Link>
    </form>
  )
}

export default AddContact;