import { Link } from "react-router-dom";

const ContactList = ({ contacts }) => {
  const additionalContacts = window.localStorage.getItem("contacts");
  const safeAdditionContacts = additionalContacts
    ? JSON.parse(additionalContacts)
    : [];

  
  return (
    <div>
    {[...contacts, ...safeAdditionContacts].map((cont) => (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="card-body">
              <div className="row align-items-center j-flex justify-content-around ">
              <div className="col-md-4">
                <img src={cont.image} alt="" className="whole userphoto" />
              </div>
              <div className="col-md-7">
                <ul className="list-group">
                  <li className="list-group-item list-group-item-action">
                    Name: <span className="fw-bold">{cont.name}</span>
                  </li>
                  <li className="list-group-item list-group-item-action">
                    Phone: <span className="fw-bold">{cont.phone}</span>
                  </li>
                  <li className="list-group-item list-group-item-action">
                    Email: <span className="fw-bold">{cont.email}</span>
                  </li>
                </ul>
              </div>
              <div className="col-md-1">
              <Link to={`/contact/${cont.id}`}>
                <button className="infobtn btn btn-primary">Info</button>
                </Link>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
  )
}
    

export default ContactList;
