import { useState, createContext, useEffect } from "react";
import { api } from "../service/Api";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export const UserProvider = ({children}) => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const [userId, setUserId] = useState(()=> { 
      
      return localStorage.getItem('userId'); 
  });
  // console.log(userId)

  const handleLogin = (userId) => {
      setUserId(userId);
      localStorage.setItem('userId', userId); 
      navigate('/');
  };

  const handleLogout = async () => {
      setUserData({});
      setUserId(null);
      localStorage.removeItem('userId'); 
      navigate('/login');
  };

  const excluirUsuario = async (userId) => {
      try {
        await api.delete(`/users/${userId}`);
        alert('Conta excluida')
      } catch (error) {
        console.error(error);
        alert(`Erro ao excluir usuário: ${error}`);
      }
      setUserData({});
      handleLogout();
      navigate('/login');
  };

  const fetchUserData = async (id) => {
      try {
        const response = await api.get('/users'); // Substitua pela sua URL de API
        const data = response.data;
    
        // Verifica o tipo do id para garantir que a comparação seja feita corretamente
        const userItems = data.filter(item => String(item.id) === String(id));
    
        if (userItems.length > 0) {
          setUserData(userItems[0]);
        } else {
          console.warn('Nenhum item encontrado com o id fornecido.');
          navigate('/login');
        }
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };
    

  useEffect(() => {
      if (userId) {
          fetchUserData(userId); // Chama a função fetchUserData se o userId existir
      }
  }, [userId]);



  return (
      <UserContext.Provider
          value={{
          userData,
          userId,
          handleLogin,
          handleLogout,
          excluirUsuario
          }}
      >
          {children}
      </UserContext.Provider>
  )


}