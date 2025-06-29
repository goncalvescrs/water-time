import { useState, createContext, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    fetchUser();
  }, []);
  // console.log(userData);

  const fetchUser = () => {
    const UserlocalStorage = JSON.parse(localStorage.getItem("userData"));
    if (UserlocalStorage) {
      setUserData(UserlocalStorage);
    }
  };

  const saveUserLocalStorage = (newUser) => {
    localStorage.setItem("userData", JSON.stringify(newUser));
    setUserData(newUser);
  };

  return (
    <UserContext.Provider
      value={{
        userData,
        fetchUser,
        saveUserLocalStorage,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
