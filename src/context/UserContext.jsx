import { useState, createContext, useEffect } from "react";
import { api } from "../service/Api";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("userData")) || {
      name: "",
      age: 0,
      weight: 0,
      height: 0,
      sleep: 0,
      bottle: 0,
    }
  );

  const fechUserLocalStorage = () => {
    const UserlocalStorage = JSON.parse(localStorage.getItem("userData"));
    if (UserlocalStorage) {
      // return UserlocalStorage;
      setUserData(UserlocalStorage);
    }
  };

  const saveUserLocalStorage = (user) => {
    localStorage.setItem("userData", JSON.stringify(user));
  };

  // ==========================================
  // const handleLogin = (userId) => {
  //   setUserId(userId);
  //   localStorage.setItem("userId", userId);
  //   navigate("/");
  // };

  // const handleLogout = async () => {
  //   setUserData({});
  //   setUserId(null);
  //   // localStorage.removeItem("userId");
  //   navigate("/login");
  // };

  // const excluirUsuario = async (userId) => {
  //   try {
  //     await api.delete(`/users/${userId}`);
  //     alert("Conta excluida");
  //   } catch (error) {
  //     console.error(error);
  //     alert(`Erro ao excluir usuário: ${error}`);
  //   }
  //   setUserData({});
  //   handleLogout();
  //   navigate("/login");
  // };

  // const fetchUserData = async (id) => {
  //   try {
  //     const response = await api.get("/users");
  //     const data = response.data;

  //     // verifica o tipo do id para garantir que a comparacao seja feita corretamente
  //     const userItems = data.filter((item) => String(item.id) === String(id));

  //     if (userItems.length > 0) {
  //       setUserData(userItems[0]);
  //     } else {
  //       console.warn("Não encontrado");
  //       navigate("/login");
  //     }
  //   } catch (error) {
  //     console.error("Erro ao buscar dados:", error);
  //   }
  // };

  // useEffect(() => {
  //   if (userId) {
  //     fetchUserData(userId);
  //   }
  // }, [userId]);

  return (
    <UserContext.Provider
      value={{
        userData,
        fechUserLocalStorage,
        saveUserLocalStorage,
        // userId,
        // userDefault,
        // handleLogin,
        // handleLogout,
        // excluirUsuario,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
