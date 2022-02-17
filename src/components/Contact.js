import "./Contact.css";
import { Link } from "react-router-dom";

const Contact = ({ fName, lName, image, email, phone }) => (
  <tr>
    <td>
      <Link to={`/contacts/${fName}_${lName}`}>
        <img className="contact-image" src={image} alt="friend-list" />{" "}
      </Link>
    </td>
    <td className="align-middle">
      {fName} {lName}
    </td>
    <td className="align-middle">{email}</td>
    <td className="align-middle">{phone}</td>
  </tr>
);

export default Contact;
