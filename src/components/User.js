import React from "react";
import { Link } from "react-router-dom";

const User = () => {
  return (
    <div className="user">
      <h1>Username</h1>
      <Link to={'/'}>Back</Link>
    </div>
  );
};

export default User;
