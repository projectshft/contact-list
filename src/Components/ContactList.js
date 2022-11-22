import { Button, Table } from "react-bootstrap";
import ContactNew from "./ContactNew";
import Contacts from "./Contacts";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Switch,
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
} from "react-router-dom";

function ContactList() {
  return (
    <div>
      <div className="col-md-8 offset-2 contactListStyling">
        <Table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Avatar</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
            </tr>
          </thead>
          {/* Contacts will populate here */}
          <Contacts />
        </Table>
      </div>
      <Link to="/addcontact">
        <Button className="contact-add" variant="primary">
          Add Contact
        </Button>
      </Link>
    </div>
  );
}

export default ContactList;
