import { Link } from 'react-router-dom';

const Button = () => (
  <div className="row">
    <div className="offset-md-3">
      <Link to="/contacts/new">
        <button type="button" className="btn btn-primary">
          Add Contact
        </button>
      </Link>
    </div>
  </div>
);

export default Button;
