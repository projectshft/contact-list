import React from "react";

export default function DisplayContact() {
  return (
    <div className="DisplayContact">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <div
            className="border border-secondary"
          >
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
        </div>
      </div>
    </div>
  );
}
