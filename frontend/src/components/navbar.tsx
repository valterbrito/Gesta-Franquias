// Navbar superior do dashboard
// Exibe título, informações de usuário e ações com layout profissional
'use client'

export default function Navbar() {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center px-4 md:px-6 justify-between shadow-sm">
      {/* Título e breadcrumb */}
      <div className="flex items-center gap-4">
        <div>
          <h2 className="text-lg font-bold text-gray-900">Dashboard</h2>
          <p className="text-xs text-gray-600">Bem-vindo ao seu painel</p>
        </div>
      </div>

      {/* Informações de usuário e ações */}
      <div className="flex items-center gap-4">
        {/* Usuário mockado */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold">
            U
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-medium text-gray-900">Usuário</p>
            <p className="text-xs text-gray-600">user@example.com</p>
          </div>
        </div>

        {/* Botão de logout */}
        <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm font-medium transition-colors duration-200">
          Sair
        </button>
      </div>
    </header>
  )
}
