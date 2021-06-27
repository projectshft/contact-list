import { Link } from "react-router-dom";
import React from "react";
import _ from "lodash";

export default function Contact({ contactName, contacts }) {
  // match the clicked name with the name in the contacts array that has been passed down
  const person = _.find(contacts, { name: contactName });

  if (!person) {
    return <div>Sorry, but the contact was not found</div>;
  }

  // display the single contact in vertical form with light border
  return (
    <div className="DisplayContact">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <div className="border border-secondary">
            <ul>
              <li><img src={person.image_url} alt="This is a person that didn't load"/></li>
              <li>
                <h3>{person.name}</h3>
              </li>
              <li>
                <h4>{person.email}</h4>
              </li>
              <li>
                <h4>{person.phone_number}</h4>
              </li>
            </ul>
          </div>
          <Link to="/contacts/">Back</Link>
        </div>
      </div>
    </div>
  );
};
