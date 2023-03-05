import { useContacts } from "./Context";
import { Link } from "react-router-dom";

const HomePage = () => {
  const myContacts = useContacts();

  return (
    <div Name="home">
      {myContacts.map((contact) => (
        <div className="contactlist col-lg-4" key={contact.id}>
          <h2 className="fw-normal">{contact.name}</h2>
          <p>
            <strong>Phone: </strong>
            {contact.phone}
          </p>
          <p>
            <strong>Email: </strong>
            {contact.email}
          </p>
          <Link to={`/${contact.id}`}>
            <button className="btn btn-primary">View details »</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
