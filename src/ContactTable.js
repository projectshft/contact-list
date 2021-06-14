import React from "react";

export default function ContactTable() {
  return (
    <div className="ContactTable">  
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-6"></div>
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th scope="col">Profile Pic</th>
                <th scope="col">Name</th>
                <th scope="col">E-mail</th>
                <th scope="col">Phone Number</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </div>
  );}