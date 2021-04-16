import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import Contact from './Contact';

const Home = ({ contacts, deleteContact }) => {
  const [redirect, setRedirect] = useState(false);
  const handleAddContactClick = () => {
    setRedirect(true);
  };

  const contactList = contacts.map((c) => (
    <Contact contact={c} deleteContact={deleteContact} />
  ));

  if (redirect) {
    return <Redirect to="/contacts/new" />;
  }

  return (
    <div className="row">
      <div className="col-md-10 offset-md-1 text-left">
        <button
          onClick={handleAddContactClick}
          type="button"
          className="btn btn-primary add-contact-button"
        >
          Add New Contact
        </button>
        <table className="table table-hover table-striped">
          <thead>
            <tr>
              <th scope="col">Profile Pic</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Options:</th>
            </tr>
          </thead>
          <tbody>{contactList}</tbody>
        </table>
      </div>
    </div>
  );
};

// <table class="table table-hover">
//   <thead>
//     <tr>
//       <th scope="col">#</th>
//       <th scope="col">First</th>
//       <th scope="col">Last</th>
//       <th scope="col">Handle</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <th scope="row">1</th>
//       <td>Mark</td>
//       <td>Otto</td>
//       <td>@mdo</td>
//     </tr>
//     <tr>
//       <th scope="row">2</th>
//       <td>Jacob</td>
//       <td>Thornton</td>
//       <td>@fat</td>
//     </tr>
//     <tr>
//       <th scope="row">3</th>
//       <td colspan="2">Larry the Bird</td>
//       <td>@twitter</td>
//     </tr>
//   </tbody>
// </table>

Home.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func,
};

export default Home;
