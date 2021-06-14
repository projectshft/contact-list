import React from "react";
import { Link } from "react-router-dom";

export default function ButtonAddContact() {
  return (
    <div className="ButtonAddContact">
      <div className="row">
        <Link to="/AddContact">
          <div className="col-md-6 offset-md-3">
            <button className="btn btn-primary">Add Contact</button>
          </div>
        </Link>
        <br></br>
      </div>
    </div>
  );
}

// Hello.propTypes = {
//   // `name` must be a string, and it can't be `null` or `undefined`!
//   name: PropTypes.string.isRequired,
// };

// Hello.propTypes = {
//   name: PropTypes.string.isRequired,
//   //we simply state that this component should expect an array of objects to be passed as props
//   apiData: PropTypes.arrayOf(PropTypes.object).isRequired,
// };