// Layout responsivo do dashboard
// Utiliza flexbox para adaptar entre mobile e desktop
// Sidebar colapsável no mobile
'use client'

import Sidebar from '../../components/sidebar'
import Navbar from '../../components/navbar'

export default function DashboardLayout({ children }) {
  // Estrutura principal do dashboard
  return (
    <div className="flex h-screen">
      {/* Sidebar lateral */}
      <Sidebar />
      {/* Conteúdo principal */}
      <div className="flex flex-col flex-1">
        {/* Navbar superior */}
        <Navbar />
        {/* Área de conteúdo scrollável */}
        <main className="p-4 md:p-6 overflow-y-auto bg-gray-50">
          {children}
        </main>
      </div>
    </div>
  )
}
