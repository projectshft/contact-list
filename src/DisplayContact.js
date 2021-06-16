import React from "react";
import { Link } from "react-router-dom";
import { ContactsStateData } from "./ContactsStateData";

export default function DisplayContact(props) {
  alert(ContactsStateData[0].name)
  // bring data into component and then filter or find in the function here and then have that - mimic Player from the React baseball example
  return (
    <div className="DisplayContact">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <div className="border border-secondary">
            < filter by id ></filter>
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


