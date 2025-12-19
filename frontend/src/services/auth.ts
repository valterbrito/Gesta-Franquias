// Serviço de autenticação para integração com Clerk/Auth0
// Simula login, logout e obtenção de usuário autenticado

// Função de login (mock)
export async function login(email: string, password: string) {
  // Aqui integraria com Clerk/Auth0
  // Mock: retorna token e dados do usuário
  return {
    token: 'mock-jwt-token',
    user: {
      email,
      role: 'USER',
      unitId: 'mock-unit-id',
    },
  }
}

// Função de logout
export function logout() {
  // Remove token do localStorage
  localStorage.removeItem('token')
}

// Função para obter usuário autenticado
export function getCurrentUser() {
  // Mock: retorna usuário do localStorage
  const user = localStorage.getItem('user')
  return user ? JSON.parse(user) : null
}
