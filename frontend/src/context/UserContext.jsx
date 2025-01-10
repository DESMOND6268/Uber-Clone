import React, { createContext, useState, useContext } from 'react';

// Create a Context for the user
const UserContext = createContext();

// Create a provider component
export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    fullName:{
      firstName: '',
      lastName: '',
    },    
    email: '',
    password: '',
  });

  // Function to update user data
  const updateUserData = (newData) => {
    setUserData((prevData) => ({
      ...prevData,
      ...newData,
    }));
  };

  return (
    <UserContext.Provider value={{ userData, updateUserData }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use user context
export const useUserContext = () => {
  return useContext(UserContext);
};
