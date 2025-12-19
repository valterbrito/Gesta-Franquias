// Sidebar do dashboard
// Colapsa no mobile e exibe navegação lateral com layout profissional
'use client'

import Link from 'next/link'

export default function Sidebar() {
  // Itens de navegação
  const menuItems = [
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/dashboard/units', label: 'Unidades' },
    { href: '/dashboard/transactions', label: 'Transações' },
    { href: '/dashboard/reports', label: 'Relatórios' },
  ]

  return (
    <aside className="w-64 bg-gray-900 text-white hidden md:flex flex-col">
      {/* Logo e título */}
      <div className="p-6 border-b border-gray-800">
        <h1 className="text-xl font-bold">Gestão SaaS</h1>
        <p className="text-xs text-gray-400 mt-1">Sistema Multitenant</p>
      </div>
      {/* Navegação */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200 text-gray-300 hover:text-white font-medium"
          >
            {item.label}
          </Link>
        ))}
      </nav>
      {/* Footer */}
      <div className="p-4 border-t border-gray-800 text-xs text-gray-500">
        <p>© 2025 Gestão SaaS</p>
      </div>
    </aside>
  )
}
