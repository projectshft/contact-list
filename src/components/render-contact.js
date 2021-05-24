import React, { useContext } from "react";
import UserContext from "../context/User";
import {Link} from 'react-router-dom'

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
          <th></th>
        </tr>
      </thead>
      <tbody >
        {/* maps through the state in in context  */}
        {userList.map((user) => (
          
          <tr key={user.id} className="contact-row">
            <th scope="row" className="img-row" ><img alt="url" src={user.imageUrl}/></th>
            <td >{user.name}</td>
            <td >{user.email}</td>
            <td >{user.number}</td>
           {/* link button to individual contact view */}
            <td><button ><Link to={`/contact/${user.id}`}>View Contact</Link></button></td>
          </tr>
        
        ))}
      </tbody>
    </table>
  );
};

export default Contacts;

