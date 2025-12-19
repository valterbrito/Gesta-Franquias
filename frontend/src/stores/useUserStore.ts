// Store para estado do usuário autenticado
// Utiliza contexto React para manter dados do usuário e unitId
import { createContext, useContext, useState } from 'react'

const UserContext = createContext(null)

export function UserProvider({ children }) {
  // Estado do usuário
  const [user, setUser] = useState(null)

  // Função para atualizar usuário
  function login(userData) {
    setUser(userData)
    localStorage.setItem('user', JSON.stringify(userData))
    localStorage.setItem('token', userData.token)
  }

  // Função para logout
  function logout() {
    setUser(null)
    localStorage.removeItem('user')
    localStorage.removeItem('token')
  }

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  )
}

// Hook para acessar o usuário
export function useUser() {
  return useContext(UserContext)
}
