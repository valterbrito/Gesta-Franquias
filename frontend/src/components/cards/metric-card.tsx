// Componente reutilizável de Card de Métrica
interface MetricCardProps {
  title: string
  value: string | number
  change?: number
  icon: string
  color?: 'blue' | 'green' | 'purple' | 'orange'
}

export default function MetricCard({
  title,
  value,
  change,
  icon,
  color = 'blue',
}: MetricCardProps) {
  const colorClass = {
    blue: 'bg-blue-50 text-blue-600 border-blue-200',
    green: 'bg-green-50 text-green-600 border-green-200',
    purple: 'bg-purple-50 text-purple-600 border-purple-200',
    orange: 'bg-orange-50 text-orange-600 border-orange-200',
  }

  const changeColor = (change || 0) >= 0 ? 'text-green-600' : 'text-red-600'

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
      {/* Header com ícone e título */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <h3 className="text-3xl font-bold text-gray-900 mt-2">{value}</h3>
        </div>
        <div className={`text-3xl p-3 rounded-lg ${colorClass[color]}`}>
          {icon}
        </div>
      </div>

      {/* Mudança percentual */}
      {change !== undefined && (
        <div className="flex items-center gap-2">
          <span className={`text-sm font-semibold ${changeColor}`}>
            {change >= 0 ? '+' : ''}{change}%
          </span>
          <span className="text-xs text-gray-600">vs mês anterior</span>
        </div>
      )}
    </div>
  )
}
