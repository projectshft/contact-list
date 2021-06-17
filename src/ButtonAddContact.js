import React from "react";
import { Link } from "react-router-dom";

export default function ButtonAddContact() {
  // addPost (post) {
  //   this.setState({ posts: this.state.posts.concat([post]) });
  // }

  return (
    <div className="ButtonAddContact">
      <div className="row">
        <Link to="/add-contact">
          <div className="col-md-6 offset-md-3">
            <button className="btn btn-primary">Add Contact</button>
          </div>
        </Link>
        <br></br>
      </div>
    </div>
  );
}

