import { useState } from "react";
import { useNavigate, Link, useSearchParams } from "react-router-dom";
import { generateContactId } from "../contacts_functions";
import PropTypes from "prop-types"; // not needed here but needed wherever props are passed

export default function NewContact({addContact}) {
 const [searchParams, setSearchParams] = useSearchParams({
    name: "",
    phone: "",
    email: "",
    profilePicture: "",
  });

  const navigate = useNavigate();

  // const contactId = "/contacts/1"; // example -- this will be a uniquely created id

  const data = {
    name: searchParams.get("name"),
    phone: searchParams.get("phone"),
    email: searchParams.get("email"),
    profilePicture: searchParams.get("profilePicture"),
    contactId: `contacts/${generateContactId()}`
    // contactId: "contacts/1"
  };

  return (
    <>
      <div className="container-fluid">
        <h1 className="text-center">Create a new contact</h1>
        <div className="row justify-content-md-center">
          <form className="col-md-8">
            <div className="mb-2">
              <label htmlFor="nameInput" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="nameInput"
                value={data.name}
                onChange={(event) =>
                  setSearchParams((prev) => {
                    prev.set("name", event.target.value);
                    return prev;
                  }, { replace: true })
                }
              />
            </div>
            <div className="mb-2">
              <label htmlFor="phoneInput" className="form-label">
                Phone Number
              </label>
              <input
                type="tel"
                className="form-control"
                id="phoneInput"
                value={data.phone}
                onChange={(event) =>
                  setSearchParams((prev) => {
                    prev.set("phone", event.target.value);
                    return prev;
                  }, { replace: true })
                }
              />
            </div>
            <div className="mb-2">
              <label htmlFor="emailInput" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="emailInput"
                value={data.email}
                onChange={(event) =>
                  setSearchParams((prev) => {
                    prev.set("email", event.target.value);
                    return prev;
                  }, { replace: true })
                }
              />
            </div>
            <div className="mb-2">
              <label htmlFor="profilePicture" className="form-label">
                Profile Picture URL
              </label>
              <input
                type="url"
                className="form-control"
                id="profilePicture"
                value={data.profilePicture}
                onChange={(event) =>
                  setSearchParams((prev) => {
                    prev.set("profilePicture", event.target.value);
                    return prev;
                  }, { replace: true })
                }
              />
            </div>
            <button
              onClick={(e) => {
                // e.preventDefault();
                addContact(data);
                navigate(`/${data.contactId}`, { state: data });
              }}
              className="btn btn-primary"
            >
              Create Contact
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
// MUST include prop types when a component receives props:

//  const Header = ({ name }) => <div>hi {name}</div>;

// Header.propTypes = {
//   name: PropTypes.string
// };

// // Same approach for defaultProps too
// Header.defaultProps = {
//   name: "Alan"
// };
