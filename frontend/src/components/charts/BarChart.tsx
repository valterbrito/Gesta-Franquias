// Componente de gráfico de barras responsivo
// Utiliza biblioteca chart.js (mock)
import React from 'react'

// Dados mockados para exemplo
const mockData = [
  { label: 'Jan', value: 1000 },
  { label: 'Fev', value: 1200 },
  { label: 'Mar', value: 900 },
]

export default function BarChart({ data = mockData }) {
  // Renderiza barras simples
  return (
    <div className="w-full h-40 flex items-end gap-2">
      {data.map((item, idx) => (
        <div key={idx} className="flex flex-col items-center">
          <div className="bg-blue-500 w-8" style={{ height: `${item.value / 10}px` }}></div>
          <span className="text-xs mt-1">{item.label}</span>
        </div>
      ))}
    </div>
  )
}
