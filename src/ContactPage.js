import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate, useParams } from 'react-router-dom';

const ContactPage = ({ contacts }) => {
  const { id } = useParams();
  const contact = contacts.find((c) => c.id === parseInt(id));

  const navigate = useNavigate();

  const handleButtonclick = () => {
    navigate('/Index');
  };

  if (!contact) {
    return (
      <div>
        <h1>Contact Not Found</h1>
      </div>
    );
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-10 offset-1">
          <div>
            <table className="table table-bordered table-hover">
              <thead className="table-dark">
                <tr className="table-active">
                  <th scope="col">Profile Picture</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone Number</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img
                      src={contact.image}
                      alt="Profile"
                      width="200"
                      height="200"
                    />
                  </td>
                  <td>{contact.name}</td>
                  <td>{contact.email}</td>
                  <td>{contact.phone}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <button
            type="button"
            className="btn btn-dark "
            onClick={() => handleButtonclick()}
          >
            Back To Contact Index
          </button>
        </div>
      </div>
    </div>
  );
};
ContactPage.propTypes = {
  contacts: PropTypes.array.isRequired,
};

export default ContactPage;
