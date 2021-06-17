import React from "react";
import { Link } from "react-router-dom";
import { ContactsStateData } from "./ContactsStateData.js";

export default function SingleContact(props) {
  const person = ContactsStateData.get(props.match.params.id);

  console.log(person);

  if (!person) {
    return <div>Sorry, but the contact {person.id}, {person.name} was not found</div>;
  };
  
  return (
    <div className="DisplayContact">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <div className="border border-secondary">
            < filter by id ></filter>
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
          <Link to="/">Back</Link>
        </div>
      </div>
    </div>
  );
};

  



