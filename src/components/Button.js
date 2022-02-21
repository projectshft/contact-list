import { Link } from 'react-router-dom';

const Button = () => (
  <div className="row">
    <div className="offset-md-2">
      <Link to="/contacts/new" className="btn btn-primary">
        New Contact
      </Link>
    </div>
  </div>
);

export default Button;
