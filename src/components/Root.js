import { Outlet, useNavigate, NavLink } from "react-router-dom";
import ContactList from "./ContactList";

export default function Root({allContacts}) {
  const navigate = useNavigate();

  return (
    <>
      <div className="container-fluid">
        <div className="row d-md-block">
          <div className="nav-container col-6 col-md-3 px-0 border-end float-start">
            <div className="navbar navbar-expand navbar-expand-md bg-body-tertiary justify-content-left">
              <input className="m-2 input-group" />
              <button className="btn btn-primary me-2 ms-md-0 ms-0" onClick={() => navigate("/new")}>New</button>
            </div>
          </div>
          <div className="col-6 col-md-9 ps-md-2 pt-2 float-end">
            <div className="row">
              <div className="col-12">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
        <div className="row d-md-block d-block">
          <div
            id="contact-list-container"
            className="col-6 col-md-3 px-0 border-end"
          >
              <ContactList allContacts={allContacts} />
          </div>
        </div>
      </div>
    </>
  );
}
