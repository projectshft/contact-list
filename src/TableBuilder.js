import React from "react";
import { Link } from "react-router-dom";
import { ContactsStateData } from "./ContactsStateData";

export default function TableBuilder() {
  return (
    <table className="table table-striped table-bordered">
      <thead>
        <tr>
          <th scope="col">Profile Pic</th>
          <th scope="col">Name</th>
          <th scope="col">E-mail</th>
          <th scope="col">Phone Number</th>  
        </tr>
      </thead>
      <tbody>
        {ContactsStateData.all().map(c => {
          return (
            <tr key={c.id}>
              <td>
                <Link to={`/display-contact/${c.id}`}>{c.name}</Link>
              </td>
              <td>
                <img src={c.image_url} alt="{c.name} headshot"/>
              </td>
              <td>{c.email}</td>
              <td>{c.phone_number}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

