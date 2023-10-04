import { Outlet, useNavigate, NavLink } from "react-router-dom";

export default function Root() {
  const navigate = useNavigate();

  return (
    <>
      <div className="container-fluid">
        <div className="row d-md-block d-block">
          <div className="nav-container col-6 col-md-3 px-0 border-end float-start">
            <div className="navbar navbar-expand-md bg-body-tertiary justify-content-left">
              <input className="m-2 input-group" />
              <button className="btn btn-primary me-2 ms-md-0 ms-2" onClick={() => navigate("/new")}>New</button>
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
            <div className="list-group border-0 rounded-0 text-md-start">
              <NavLink
                to="/"
                className="list-group-item border-end-0 d-inline-block text-truncate"
              >
                contact
              </NavLink>
              <NavLink
                to="/contacts/1"
                className="list-group-item border-end-0 d-inline-block text-truncate"
              >
                Jordan
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
