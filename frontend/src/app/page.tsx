// Página raiz do aplicativo
// Redireciona para o dashboard
import { redirect } from 'next/navigation'

export default function Home() {
  redirect('/dashboard')
}
