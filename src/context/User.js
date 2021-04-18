import React, { useState, createContext } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userList, setUserList] = useState([]);

  const addUser = (_user) => {
    setUserList([_user, ...userList]);
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
