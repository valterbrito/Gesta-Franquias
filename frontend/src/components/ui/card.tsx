// Card empilhável para exibir métricas ou gráficos
// Utiliza classes utilitárias para responsividade
import React from 'react'

export function Card({ children }) {
  return (
    <div className="bg-white rounded shadow p-4 mb-4 flex flex-col">
      {children}
    </div>
  )
}

export function CardHeader({ children }) {
  return <div className="mb-2 font-bold text-lg">{children}</div>
}

export function CardContent({ children }) {
  return <div>{children}</div>
}

export function CardTitle({ children }) {
  return <div className="text-gray-700">{children}</div>
}
