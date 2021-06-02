import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { ContactContext } from "./App";
import DeleteConfirmationModal from "./DeleteConfirmationModal";
import PropTypes from "prop-types";

export default function ContactProfile(props) {
  const { contacts } = useContext(ContactContext);
  const id = parseInt(props.match.params.id);
  const contact = contacts.find((c) => c.id === id);
  const history = useHistory();

  if (!contact) {
    return (
      <div>
        <p>Contact Not Found</p>
        <button
          onClick={() => history.push(`/`)}
          type="button"
          className="btn btn-secondary"
        >
          Home
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="row">
        <div className="col d-flex justify-content-center">
          <div className="card" style={{ width: "18rem" }}>
            <img
              className="card-img-top"
              src={contact.image_url}
              alt="Profile Pic"
            />
            <div className="card-body text-center">
              <h5 className="card-title">{contact.name}</h5>
              <p className="card-text">{contact.email}</p>
              <p className="card-text">{contact.phone_number}</p>
              <button
                onClick={() => history.push(`/contacts/${id}/edit`)}
                className="btn btn-sm btn-outline-info"
              >
                Edit Contact
              </button>
              <DeleteConfirmationModal id={id} />
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={() => history.push(`/`)}
        type="button"
        className="btn btn-sm btn-secondary text-center"
      >
        Back
      </button>
    </>
  );
}

ContactProfile.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }),
};
