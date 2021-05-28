import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContactContext } from "./App";

export default function ContactProfile(props) {
  const { handleContactDelete } = useContext(ContactContext);
  const id = parseInt(props.match.params.id);

  return (
    <>
      <div className="row">
        <div className="col d-flex justify-content-center">
          <div className="card" style={{ width: "18rem" }}>
            <img
              className="card-img-top"
              src={props.history.location.state.image_url}
              alt="Profile Pic"
            />
            <div className="card-body text-center">
              <h5 className="card-title">
                {props.history.location.state.name}
              </h5>
              <p className="card-text">{props.history.location.state.email}</p>
              <p className="card-text">
                {props.history.location.state.phone_number}
              </p>
              <button className="btn btn-sm btn-outline-info">
                Edit Contact
              </button>
              <Link to="/contacts">
                <button
                  onClick={() => handleContactDelete(id)}
                  className="btn btn-sm btn-outline-danger"
                >
                  Delete Contact
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Link to="/">
        <button type="button" className="btn btn-sm btn-secondary text-center">
          Back
        </button>
      </Link>
    </>
  );
}
