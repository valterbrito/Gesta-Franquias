// Serviço de API para integração com backend
// Utiliza Axios e intercepta requisições para adicionar token
import axios from 'axios'

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL, // URL do backend
})

// Interceptor para adicionar token JWT
api.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})

// Exemplo de chamada mockada
export async function getDashboardData() {
  // Simula resposta do backend
  return {
    faturamentoMensal: [
      { label: 'Jan', value: 10000 },
      { label: 'Fev', value: 12000 },
      { label: 'Mar', value: 9000 },
    ],
    saldoAtual: 25000,
    transacoesRecentes: [
      { tipo: 'entrada', valor: 10000 },
      { tipo: 'saída', valor: 2500 },
      { tipo: 'entrada', valor: 3000 },
    ],
  }
}
