import React, { useState, createContext } from "react";

//creates the context
const UserContext = createContext();

// exports the context providor to the parent
export const UserProvider = ({ children }) => {
  
  // state for contacts in indexed object arrays
  const [userList, setUserList] = useState([]);
// function to add the contact
  const addUser = (user) => {
    setUserList([user, ...userList]);
  };

  return (
    <UserContext.Provider
      value={{
        userList,
        addUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
