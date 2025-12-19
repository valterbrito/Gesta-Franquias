// Sidebar com menu de navegação colapsável
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const menuItems = [
  { name: 'Dashboard', href: '/dashboard', icon: '📊' },
  { name: 'Relatórios', href: '/dashboard/reports', icon: '📋' },
  { name: 'Usuários', href: '/dashboard/users', icon: '👥' },
  { name: 'Transações', href: '/dashboard/transactions', icon: '💳' },
  { name: 'Unidades', href: '/dashboard/units', icon: '🏢' },
  { name: 'Configurações', href: '/dashboard/settings', icon: '⚙️' },
]

export default function Sidebar() {
  const [open, setOpen] = useState(true)
  const pathname = usePathname()

  return (
    <>
      {/* Overlay para mobile */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-20"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-16 h-[calc(100vh-64px)] bg-white border-r border-gray-200 shadow-sm transition-all duration-300 z-30 ${
          open ? 'w-64' : 'w-0 md:w-20'
        } md:relative md:top-0 md:h-screen overflow-hidden`}
      >
        {/* Toggle Button */}
        <button
          onClick={() => setOpen(!open)}
          className="hidden md:flex absolute -right-3 top-6 w-6 h-6 bg-white border border-gray-200 rounded-full items-center justify-center hover:bg-gray-50"
        >
          {open ? '←' : '→'}
        </button>

        {/* Menu Items */}
        <nav className="p-4 space-y-2 h-full overflow-y-auto">
          {menuItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <span className="text-xl flex-shrink-0">{item.icon}</span>
                <span className={`font-medium ${open ? 'opacity-100' : 'md:opacity-0 md:w-0'}`}>
                  {item.name}
                </span>
              </Link>
            )
          })}
        </nav>
      </aside>
    </>
  )
}
