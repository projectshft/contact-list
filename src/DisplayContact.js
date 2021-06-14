import React from "react";
import { Link } from "react-router-dom";

export default function DisplayContact(props) {

  return (
    <div className="DisplayContact">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <div className="border border-secondary">
            <ul>
              <li>URL</li>
              <li>
                <h3>Name</h3>
              </li>
              <li>
                <h4>Email</h4>
              </li>
              <li>
                <h4>Phone</h4>
              </li>
            </ul>
          </div>
          <Link to="/">Back</Link>
        </div>
      </div>
    </div>
  );
}


