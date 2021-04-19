import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../context/User";

// I was going to use this component for the contact view couldnt get the id to update the state
// so i was going to try to grab the indexed on click of a button and route to this component

 const Contact = () => {

  const { userList } = useContext(UserContext);
  console.log(userList);

  return (
    <>
    </>
  )
}


export default Contact
