import React from "react";
import { Link } from "react-router-dom";
import { ContactsStateData } from "./ContactsStateData.js";

export default function SingleContact(props) {
  alert("here!");

  const person = ContactsStateData.get(parseInt(props.match.params.id, 8));
  
  alert(person);
  if (!person) {
    return <div>Sorry, but the contact was not found</div>;
  }
  
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

  



