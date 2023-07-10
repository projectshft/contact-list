import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const Contact = ({ contact }) => {
  const navigate = useNavigate();

  return (
    <tr
      onClick={() => {
        navigate("/contacts/{contact.profileID}", { state: contact });
      }}
    >
      <td>
        <img src={contact.imageURL} className="imgMaxWidth" />
      </td>
      <td scope="row">{contact.name}</td>

      <td>{contact.email}</td>
      <td>{contact.phoneNumber}</td>
    </tr>
  );
};

Contact.propTypes = {
  contact: PropTypes.object,
};

export default Contact;
