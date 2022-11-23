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
          <Contacts />
        </Table>
      </div>
    </div>
  );
}

export default ContactList;
