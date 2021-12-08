import { createContext, useState } from "react";
import { useNavigate } from "react-router";
import roles from "../helpers/roles";

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

  // const [user, setUser] = useState({ id: 1, role: roles.admin });
  const navigate = useNavigate();
  const [user, setUser] = useState({ id: 1, name: 'Sergio', email: 'checho.salazar12@gmail.com', role: roles.admin });

  const login = (userCredentials, fromLocation) => {
    setUser({ id: 1, name: 'Sergio', email: 'checho.salazar12@gmail.com', role: roles.admin });
    if (fromLocation) {
      navigate(fromLocation, {replace:true});
    }
  } 
  const logout = () => setUser(null);

  const updateUser = (data) => {
    setUser ({
      ...user,
      ...data
    })
  }

  const isLogged = () => !!user;
  const hasRole = (role) => role && user?.role === role;

  const contextValue = {
    user,
    updateUser,
    isLogged,
    hasRole,
    login,
    logout
  };

  return (
    <AuthContext.Provider value = {contextValue}>
      { children }
    </AuthContext.Provider>
  )
}

export default AuthProvider
