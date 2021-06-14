import React from "react";
import { Switch, Link } from "react-router-dom";
import TableBuilder from "./TableBuilder.js";

export default function ContactTable() {
  return (
    <div className="ContactTable">
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-6">
            <TableBuilder />
          </div>
        </div>
      </div>
    </div>
  );}