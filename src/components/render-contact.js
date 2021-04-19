import React, { useContext } from "react";
import UserContext from "../context/User";

// renders the individual contacts 
const Contacts = () => {

  // grabs the state from the context
  const { userList } = useContext(UserContext);

  return (
    <table className="table">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Profile Pic</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Phone Number</th>
        </tr>
      </thead>
      <tbody>
        {/* maps through the state in in context  */}
        {userList.map((user) => (
          <tr className="contact-row">
            <th scope="row" className="img-row"><img src={user.imageUrl}/></th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.number}</td>
            <td><button>Delete</button></td>
            <td><button>Edit </button></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Contacts;