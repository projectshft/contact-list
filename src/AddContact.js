import React from "react";

export default function AddContact() {
  return (
    <div className="AddContact">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <form className="post-form">
            <h3>Add a New Post</h3>

            <div className="form-group">
              Full Name
              <input type="text" className="form-control full-name" value="" />
              <br />
              Email Address
              <input
                type="text"
                className="form-control email-address"
                value=""
              />
              <br />
              Phone Number
              <input
                type="text"
                className="form-control phone-number"
                value=""
              />
              <br />
              Image URL
              <input type="text" className="form-control image-url" value="" />
              <br />
            </div>

            <button type="button" className="btn btn-primary add-contact">
              Add Contact
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
