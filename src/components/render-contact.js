import React, { useContext } from "react";

import UserContext from "../context/User";

const Contact = () => {
  const { userList } = useContext(UserContext);

  return (
    <table className="table">
  
      <tbody>
        {userList.map((user) => (
          <tr>
            <td scope="row"><img src={user.imageUrl}/></td>
            <th>{user.name}</th>
            <td>{user.email}</td>
            <td>{user.number}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Contact;